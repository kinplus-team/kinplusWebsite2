import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.GRAPHCMS_ENDPOINT": JSON.stringify(env.GRAPHCMS_ENDPOINT),
      "process.env.GRAPHCMS_TOKEN": JSON.stringify(env.GRAPHCMS_TOKEN),
    },
    plugins: [react()],
  };
});
