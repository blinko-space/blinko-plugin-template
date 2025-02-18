import { WebSocketServer } from 'ws';
import { spawn } from 'child_process';
import { watch } from 'fs';
import * as fs from 'fs';
import * as path from 'path';
import chalk from 'chalk';

const wss = new WebSocketServer({ port: 8080 });

/**
 * Retrieves the latest build file from the 'dist' directory.
 * @returns {string | undefined} The filename of the latest build file.
 */
const getLatestBuildFile = () => {
  const files = fs.readdirSync('./dist');
  return files.find(file => file.startsWith('index_') && file.endsWith('.js'));
};

/**
 * Sends the latest build code to a connected WebSocket client.
 * @param {WebSocket} client - The WebSocket client to send the code to.
 */
const sendLatestCode = (client: any) => {
  try {
    const fileName = getLatestBuildFile();
    if (!fileName) {
      console.error(chalk.red('❌ No build file found.'));
      return;
    }

    const code = fs.readFileSync(path.join('./dist', fileName), 'utf-8');
    console.log(chalk.green(`📦 Build code size: ${code.length} bytes, Filename: ${fileName}`));

    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({
        type: 'code',
        fileName,
        code: code
      }));
    }
  } catch (error) {
    console.error(chalk.red('❌ Failed to read file:'), error);
  }
};

// Start the Vite build process with watch mode
const viteProcess = spawn('vite', ['build', '--watch'], {
  stdio: 'inherit',
  shell: true
});

// Debounce timer for file change events
let debounceTimer: NodeJS.Timeout | null = null;

// Watch for changes in the 'dist' directory
watch('./dist', { recursive: true }, (eventType, filename) => {
  if (filename && filename.endsWith('.js')) {
    // Clear the previous timer
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    // Set a new debounce timer
    //@ts-ignore
    debounceTimer = setTimeout(() => {
      console.log(chalk.blue(`🔄 Build completed, file updated: ${filename}`));
      wss.clients.forEach(sendLatestCode);
    }, 100); // 100ms debounce delay
  }
});

// Initial print of the server running message
console.log(chalk.cyan('🎉 Development server is running on ws://localhost:8080')); 