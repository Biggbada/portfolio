import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { randomBytes } from 'crypto'

// https://vitejs.dev/config/


// Polyfill global crypto.getRandomValues pour Node
if (!globalThis.crypto) {
  globalThis.crypto = {}
}
globalThis.crypto.getRandomValues = (arr) => {
  const bytes = randomBytes(arr.length)
  arr.set(bytes)
  return arr
}

export default defineConfig({
  base: '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
