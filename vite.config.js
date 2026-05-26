import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/AI-powered-crypto-advisor/', 
  build: {
    rollupOptions: {
      onLog(level, log, handler) {
        // Silence annoying misplaced comment warnings from third-party npm packages
        if (log.code === 'INVALID_ANNOTATION') return;
        
        // Otherwise, let standard warnings/errors pass through normally
        handler(level, log);
      }
    }
  }
})