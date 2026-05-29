import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: '/AI-powered-crypto-advisor/',
  build: {
    rollupOptions: {
      onLog(level, log, handler) {
        if (log.code === 'INVALID_ANNOTATION') return;
        handler(level, log);
      }
    }
  }
})