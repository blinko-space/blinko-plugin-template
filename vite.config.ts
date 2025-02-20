import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import * as fs from 'fs';
import * as path from 'path';
import plugin from './plugin.json';
import en from './src/locales/en.json';
import zh from './src/locales/zh.json';

/**
 * Generates a random string for development build filenames
 * @param {number} length - Length of the random string
 * @returns {string} Random string
 */
const generateRandomString = (length: number = 8) => {
  return Math.random().toString(36).substring(2, length + 2);
};

// Required fields for plugin.json validation
const requiredFields = ['name', 'author', 'url', 'version', 'minAppVersion', 'displayName', 'description'];

export default defineConfig(({ mode }) => ({
  plugins: [
    preact(),
    {
      name: 'check-plugin-json',
      buildStart() {
        const pluginPath = path.resolve(__dirname, 'plugin.json');
        if (!fs.existsSync(pluginPath)) {
          throw new Error('plugin.json not found');
        }

        const pluginData = JSON.parse(fs.readFileSync(pluginPath, 'utf-8'));
        const missingFields = requiredFields.filter(field => !(field in pluginData));

        if (missingFields.length > 0) {
          throw new Error(`Missing required fields in plugin.json: ${missingFields.join(', ')}`);
        }
      }
    }
  ],
  define: {
    '__PLUGIN_JSON__': plugin,
    '__en__': en,
    '__zh__': zh
  },
  build: {
    lib: {
      entry: 'src/index.tsx',
      formats: ['es'],
      fileName: mode != 'production' ? () => `index_${generateRandomString()}.js` : 'index'
    },
    outDir: mode != 'production' ? 'dist' : 'release',
    rollupOptions: {
      external: ['blinko'],
      output: {
        inlineDynamicImports: true
      }
    }
  },
  json: {
    stringify: false,
  }
}));