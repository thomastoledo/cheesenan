import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      'cheesenan': path.resolve(__dirname, '../../dist/esm'),
    },
  },
});
