import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

const generateRandomString = (length: number = 8) => {
  return Math.random().toString(36).substring(2, length + 2);
};

export default defineConfig(({ mode }) => ({
  plugins: [preact()],
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
