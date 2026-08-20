import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const isGhPages = mode === "gh-pages" || (process.env.NODE_ENV === "production" && !process.env.VERCEL);
  const base = isGhPages ? "/Canvix/" : "/";

  return {
    plugins: [react(), tailwindcss()],
    base,
    server: {
      port: 5173,
      proxy: {
        "/api": {
          target: "http://localhost:5000",
          changeOrigin: true,
        },
      },
    },
  };
});