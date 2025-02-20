import { WebSocketServer } from "ws";
import { spawn } from "child_process";
import { watch } from "fs";
import * as fs from "fs";
import * as path from "path";
import chalk from "chalk";
import { networkInterfaces } from "os";
import plugin from "./plugin.json";
import * as http from "http";

// Get command line arguments
const args = process.argv.slice(2);

const wss = new WebSocketServer({
  port: 8080,
  // Add CORS headers in the upgrade process
  verifyClient: (info, cb) => {
    // Allow all origins
    if (info.req.headers.origin) {
      info.req.headers["access-control-allow-origin"] = "*";
    }
    cb(true);
  },
});

/**
 * Retrieves the latest build file from the 'dist' directory.
 * @returns {string | undefined} The filename of the latest build file.
 */
const getLatestBuildFile = () => {
  const files = fs.readdirSync("./dist");
  return files.find(
    (file) => file.startsWith("index_") && file.endsWith(".js")
  );
};

/**
 * Sends the latest build code to a connected WebSocket client.
 * @param {WebSocket} client - The WebSocket client to send the code to.
 */
const sendLatestCode = (client: any) => {
  try {
    const fileName = getLatestBuildFile();
    if (!fileName) {
      console.error(chalk.red("❌ No build file found."));
      return;
    }

    const code = fs.readFileSync(path.join("./dist", fileName), "utf-8");
    console.log(
      chalk.green(
        `📦 Build code size: ${code.length} bytes, Filename: ${fileName}`
      )
    );

    if (client.readyState === WebSocket.OPEN) {
      client.send(
        JSON.stringify({
          type: "code",
          fileName,
          metadata: plugin,
          code: code,
        })
      );
    }
  } catch (error) {
    console.error(chalk.red("❌ Failed to read file:"), error);
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
      if (
        net.family === "IPv4" &&
        !net.internal &&
        (net.address.startsWith("192.168.") || net.address.startsWith("10."))
      ) {
        return net.address;
      }
    }
  }
  return "localhost"; // Return localhost if no suitable IP is found
};

/**
 * Ensures the dist directory exists
 * Creates it if it doesn't exist
 */
const ensureDistDirectory = () => {
  const distPath = "./dist";
  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath);
    console.log(chalk.green("📁 Created dist directory"));
  }
};

// Start the Vite build process with watch mode
spawn("vite", ["build", "--watch", "--mode", "dev"], {
  stdio: "inherit",
  shell: true,
});

// Debounce timer for file change events
let debounceTimer: NodeJS.Timeout | null = null;

wss.on("connection", (client) => {
  console.log(chalk.green("🔌 New Blinko client connected"));
  sendLatestCode(client);
});

ensureDistDirectory();
// Watch for changes in the 'dist' directory
watch("./dist", { recursive: true }, (eventType, filename) => {
  if (filename && filename.endsWith(".js")) {
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
 * Creates a simple HTTP server to display connection instructions
 * @param {number} port - HTTP server port
 */
const createHttpServer = (port: number = 3000) => {
  const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Blinko Plugin Development Server</title>
          <style>
            body {
              font-family: system-ui, -apple-system, sans-serif;
              max-width: 800px;
              margin: 40px auto;
              padding: 0 20px;
              line-height: 1.6;
              color: #333;
            }
            .container {
              background: #f5f5f5;
              border-radius: 8px;
              padding: 20px;
              margin: 20px 0;
            }
            .code {
              background: #e0e0e0;
              padding: 10px;
              border-radius: 4px;
              font-family: monospace;
              cursor: pointer;
              position: relative;
              transition: background-color 0.2s;
            }
            .code:hover {
              background: #d0d0d0;
            }
            .code::after {
              content: 'Click to copy';
              position: absolute;
              right: 10px;
              font-size: 12px;
              color: #666;
              opacity: 0;
              transition: opacity 0.2s;
            }
            .code:hover::after {
              opacity: 1;
            }
            .toast {
              position: fixed;
              top: 20px;
              right: 20px;
              padding: 10px 20px;
              background: #4CAF50;
              color: white;
              border-radius: 4px;
              display: none;
              animation: fadeIn 0.3s, fadeOut 0.3s 1.7s;
            }
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(-20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes fadeOut {
              from { opacity: 1; transform: translateY(0); }
              to { opacity: 0; transform: translateY(-20px); }
            }
          </style>
        </head>
        <body>
          <div id="toast" class="toast">Copied to clipboard!</div>
          <h1>🔌 Blinko Plugin Development Server</h1>
          <div class="container">
            <h2>Connection Instructions:</h2>
            <p>Please enter the following WebSocket URL in your Blinko plugin settings:</p>
            
            <p>Local Network Access:</p>
            <div class="code" onclick="copyToClipboard(this)">
              ws://${getLocalIP()}:8080
            </div>
            
            <p>Local Access:</p>
            <div class="code" onclick="copyToClipboard(this)">
              ws://localhost:8080
            </div>

            <p>External Access:</p>
            <div class="code" onclick="copyToClipboard(this)">
              ws://\${window.location.hostname}:8080
            </div>
          </div>
          <div class="container">
            <h3>Plugin Information:</h3>
            <p><strong>Name:</strong> ${plugin.name}</p>
            <p><strong>Version:</strong> ${plugin.version}</p>
          </div>
          <p class="highlight">Note: Keep this window open while developing your plugin.</p>

          <script>
            // Update the external access URL on page load
            document.addEventListener('DOMContentLoaded', () => {
              const externalUrlElement = document.querySelector('.code:last-of-type');
              if (externalUrlElement) {
                const hostname = window.location.hostname;
                // Handle CodeSandbox and other development domains
                const wsHostname = hostname.replace(/-\d{4}\.preview\.csb\.app$/, '-8080.preview.csb.app')
                                        .replace(/-3000\./, '-8080.');
                externalUrlElement.textContent = \`ws://\${wsHostname}\`;
              }
            });

            function copyToClipboard(element) {
              const text = element.textContent.trim();
              navigator.clipboard.writeText(text).then(() => {
                showToast();
              }).catch(() => {
                // Fallback for browsers that don't support clipboard API
                const textarea = document.createElement('textarea');
                textarea.value = text;
                document.body.appendChild(textarea);
                textarea.select();
                try {
                  document.execCommand('copy');
                  showToast();
                } catch (err) {
                  console.error('Failed to copy:', err);
                }
                document.body.removeChild(textarea);
              });
            }

            function showToast() {
              const toast = document.getElementById('toast');
              toast.style.display = 'block';
              setTimeout(() => {
                toast.style.display = 'none';
              }, 2000);
            }
          </script>
        </body>
      </html>
    `;
    res.end(html);
  });

  server.listen(port, () => {
    console.log(
      chalk.cyan(
        `📝 Documentation server running at http://${getLocalIP()}:${port}`
      )
    );
    console.log(chalk.cyan(`📝 Local access: http://localhost:${port}`));
  });
};

/**
 * Initialize server and setup environment
 */
async function initServer() {
  ensureDistDirectory();

  // Start HTTP server for documentation
  createHttpServer();

  console.log(
    chalk.cyan(`🎉 WebSocket server running at ws://${getLocalIP()}:8080`)
  );
  console.log(
    chalk.yellow("ℹ️  Open http://localhost:3000 for connection instructions")
  );
}

// Start the server
initServer();
