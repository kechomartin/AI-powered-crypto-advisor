import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    tailwindcss() 
  ],
  base: command === 'build' ? '/AI-powered-crypto-advisor/' : '/',
  css: {
    transformer: 'postcss' 
  },
  build: {
    cssMinify: 'esbuild',
    rollupOptions: {
      onLog(level, log, handler) {
        if (log.code === 'INVALID_ANNOTATION') return;
        handler(level, log);
      }
    }
  }
}))