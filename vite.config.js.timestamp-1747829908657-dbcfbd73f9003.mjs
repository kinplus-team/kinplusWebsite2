// vite.config.js
import { defineConfig, loadEnv } from "file:///C:/Users/KINPLUS/Documents/Kinplus/Projects/kinplusWebsite2/node_modules/vite/dist/node/index.js";
import { VitePWA } from "file:///C:/Users/KINPLUS/Documents/Kinplus/Projects/kinplusWebsite2/node_modules/vite-plugin-pwa/dist/index.js";
import react from "file:///C:/Users/KINPLUS/Documents/Kinplus/Projects/kinplusWebsite2/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.GRAPHCMS_ENDPOINT": JSON.stringify(env.VITE_GRAPHCMS_ENDPOINT),
      "process.env.GRAPHCMS_TOKEN": JSON.stringify(env.VITE_GRAPHCMS_TOKEN)
    },
    plugins: [
      react(),
      VitePWA({
        manifest: true,
        registerType: "autoUpdate",
        workbox: {
          globPatterns: ["**/*.{js,css,html,ico,png,svg}"]
        }
      })
    ],
    server: {
      host: true,
      port: 3e3
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxLSU5QTFVTXFxcXERvY3VtZW50c1xcXFxLaW5wbHVzXFxcXFByb2plY3RzXFxcXGtpbnBsdXNXZWJzaXRlMlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcS0lOUExVU1xcXFxEb2N1bWVudHNcXFxcS2lucGx1c1xcXFxQcm9qZWN0c1xcXFxraW5wbHVzV2Vic2l0ZTJcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0tJTlBMVVMvRG9jdW1lbnRzL0tpbnBsdXMvUHJvamVjdHMva2lucGx1c1dlYnNpdGUyL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gXCJ2aXRlLXBsdWdpbi1wd2FcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xyXG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSwgXCJcIik7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBkZWZpbmU6IHtcclxuICAgICAgXCJwcm9jZXNzLmVudi5HUkFQSENNU19FTkRQT0lOVFwiOiBKU09OLnN0cmluZ2lmeShlbnYuVklURV9HUkFQSENNU19FTkRQT0lOVCksXHJcbiAgICAgIFwicHJvY2Vzcy5lbnYuR1JBUEhDTVNfVE9LRU5cIjogSlNPTi5zdHJpbmdpZnkoZW52LlZJVEVfR1JBUEhDTVNfVE9LRU4pLFxyXG4gICAgfSxcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgcmVhY3QoKSxcclxuICAgICAgVml0ZVBXQSh7XHJcbiAgICAgICAgbWFuaWZlc3Q6IHRydWUsXHJcbiAgICAgICAgcmVnaXN0ZXJUeXBlOiBcImF1dG9VcGRhdGVcIixcclxuICAgICAgICB3b3JrYm94OiB7XHJcbiAgICAgICAgICBnbG9iUGF0dGVybnM6IFtcIioqLyoue2pzLGNzcyxodG1sLGljbyxwbmcsc3ZnfVwiXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIF0sXHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgaG9zdDogdHJ1ZSxcclxuICAgICAgcG9ydDogMzAwMCxcclxuICAgIH0sXHJcbiAgfTtcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVgsU0FBUyxjQUFjLGVBQWU7QUFDdlosU0FBUyxlQUFlO0FBQ3hCLE9BQU8sV0FBVztBQUVsQixJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUN4QyxRQUFNLE1BQU0sUUFBUSxNQUFNLFFBQVEsSUFBSSxHQUFHLEVBQUU7QUFFM0MsU0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLE1BQ04saUNBQWlDLEtBQUssVUFBVSxJQUFJLHNCQUFzQjtBQUFBLE1BQzFFLDhCQUE4QixLQUFLLFVBQVUsSUFBSSxtQkFBbUI7QUFBQSxJQUN0RTtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLFFBQ04sVUFBVTtBQUFBLFFBQ1YsY0FBYztBQUFBLFFBQ2QsU0FBUztBQUFBLFVBQ1AsY0FBYyxDQUFDLGdDQUFnQztBQUFBLFFBQ2pEO0FBQUEsTUFDRixDQUFDO0FBQUEsSUFDSDtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
