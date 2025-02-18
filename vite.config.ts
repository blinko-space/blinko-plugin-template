import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { h } from 'preact';

export default defineConfig({
  
  plugins: [preact()],
  build: {
    lib: {
      entry: 'index.tsx',
      formats: ['es'],
      fileName: 'index'
    },
    rollupOptions: {
      external: ['blinko']
    }
  }
});
