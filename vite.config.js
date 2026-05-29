// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss()
//   ],
//   
//   base: '/AI-powered-crypto-advisor/',
//   build: {
//     rollupOptions: {
//       onLog(level, log, handler) {
//         if (log.code === 'INVALID_ANNOTATION') return;
//         handler(level, log);
//       }
//     }
//   }
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/AI-powered-crypto-advisor/', // Add this exact line
})