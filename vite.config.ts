import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { h } from 'preact';

const generateRandomString = (length: number = 8) => {
  return Math.random().toString(36).substring(2, length + 2);
};

export default defineConfig({
  
  plugins: [preact()],
  build: {
    lib: {
      entry: 'src/index.tsx',
      formats: ['es'],
      fileName: () => `index_${generateRandomString()}.js`  
    },
    rollupOptions: {
      external: ['blinko']
    }
  }
});
