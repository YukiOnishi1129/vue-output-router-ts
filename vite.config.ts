import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import { REPOSITORY_NAME } from "./src/config/config";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === "production" ? `/${REPOSITORY_NAME}/` : "/",
  test: {
    globals: true,
    environment: "jsdom",
  },
});
