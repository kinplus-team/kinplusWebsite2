import { defineConfig, loadEnv } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    define: {
      "process.env.GRAPHCMS_ENDPOINT": JSON.stringify(env.VITE_GRAPHCMS_ENDPOINT),
      "process.env.GRAPHCMS_TOKEN": JSON.stringify(env.VITE_GRAPHCMS_TOKEN),
    },
    plugins: [
      react(),
      VitePWA({
        manifest: true,
        registerType: "autoUpdate",
        workbox: {
          globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        },
      }),
    ],
    server: {
      host: true,
      port: 3000,
    },
  };
});
