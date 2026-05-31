import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig(({ command }) => ({
  // Em build para GitHub Pages, publica em /Website/.
  base: process.env.DEPLOY_TARGET === 'github'
    ? '/Website/'
    : '/',
  plugins: [react(), tailwindcss(), cloudflare()],
}))