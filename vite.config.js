import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Memastikan path asset relatif sehingga bisa dibuka di hosting/static server apa pun
})
