import { WebSocketServer } from 'ws';
import { spawn } from 'child_process';
import { watch } from 'fs';
import * as fs from 'fs';
import * as path from 'path';
import chalk from 'chalk';
import { networkInterfaces } from 'os';
import plugin from './plugin.json'
// Get command line arguments
const args = process.argv.slice(2);

const wss = new WebSocketServer({ 
  port: 8080,
  // Add CORS headers in the upgrade process
  verifyClient: (info, cb) => {
    // Allow all origins
    if (info.req.headers.origin) {
      info.req.headers['access-control-allow-origin'] = '*';
    }
    cb(true);
  }
});

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
        metadata: plugin,
        code: code
      }));
    }
  } catch (error) {
    console.error(chalk.red('❌ Failed to read file:'), error);
  }
};

/**
 * Get the local network IP address
 * @returns {string} Local network IP address
 */
const getLocalIP = () => {
  const nets = networkInterfaces();
  for (const name of Object.keys(nets)) {
    const interfaces = nets[name];
    if (!interfaces) continue;
    
    for (const net of interfaces) {
      // Only get IPv4 addresses, non-internal, and starting with 192.168 or 10.
      if (net.family === 'IPv4' && 
          !net.internal && 
          (net.address.startsWith('192.168.') || net.address.startsWith('10.'))) {
        return net.address;
      }
    }
  }
  return 'localhost'; // Return localhost if no suitable IP is found
};

/**
 * Ensures the dist directory exists
 * Creates it if it doesn't exist
 */
const ensureDistDirectory = () => {
  const distPath = './dist';
  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath);
    console.log(chalk.green('📁 Created dist directory'));
  }
};

// Start the Vite build process with watch mode
spawn('vite', ['build', '--watch', '--mode', 'dev'], {
  stdio: 'inherit',
  shell: true
});

// Debounce timer for file change events
let debounceTimer: NodeJS.Timeout | null = null;

wss.on('connection', (client) => {
  console.log(chalk.green('🔌 New Blinko client connected'));
  sendLatestCode(client);
});

ensureDistDirectory();
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

/**
 * Initialize server and setup environment
 */
async function initServer() {
  // Start WebSocket server
  console.log(chalk.cyan(`🎉 Development server running at ws://${getLocalIP()}:8080`));
}

// Start the server
initServer();
