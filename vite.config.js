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
})
