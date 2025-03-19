/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: process.env.VITE_BACKEND_URL || "http://localhost:5000",
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Tambahkan ini
    },
  },
});
