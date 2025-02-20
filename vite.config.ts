import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import * as fs from 'fs';
import * as path from 'path';
import plugin from './plugin.json';

const generateRandomString = (length: number = 8) => {
  return Math.random().toString(36).substring(2, length + 2);
};

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
    '__PLUGIN_JSON__': plugin
  },
  build: {
    lib: {
      entry: 'src/index.tsx',
      formats: ['es'],
      fileName: mode != 'production' ? () => `index_${generateRandomString()}.js` : 'index'
    },
    outDir: mode != 'production' ? 'dist' : 'release',
    rollupOptions: {
      external: ['blinko']
    }
  }
}));