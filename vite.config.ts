import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [react(), tailwindcss(), VitePWA({
    registerType: "autoUpdate",

    manifest: {
      name: "My JW Companion",
      short_name: "JW Companion",
      description: "Personal companion for meetings and study",
      theme_color: "#1976d2",
      background_color: "#ffffff",
      display: "standalone",
      start_url: "/",

      icons: [
        {
          src: "icon-192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "icon-512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
  }), cloudflare()],
});