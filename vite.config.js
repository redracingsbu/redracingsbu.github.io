import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ["babel-plugin-react-compiler", {}]
        ]
      }
    }),
    tailwindcss(),
  ],
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;

          const norm = id.replace(/\\/g, '/');

          if (norm.includes('/react-router-dom/')) return 'react-router';

          if (norm.includes('/react-dom/') || norm.includes('/react/')) {
            return 'react-vendor';
          }
        },
      }
    }
  }
})