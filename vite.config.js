import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react({
    babel: {
      plugins: [
        ["babel-plugin-react-compiler", {}] // broken with the fabric three react page
      ]
    }
  }),
  tailwindcss(),
  ],
  base: '/',
  assetsInclude: ['**/*.glb'],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React ecosystem
          'react-vendor': ['react', 'react-dom'],
          'react-router': ['react-router-dom'],
          
          // Three.js and related
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          
        },
      }
    }
  }
})
