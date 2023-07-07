import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(path.join(__dirname, './certs/key.pem'), 'utf-8'),
      cert: fs.readFileSync(path.join(__dirname, './certs/cert.pem'), 'utf-8')
    }
  }
})
