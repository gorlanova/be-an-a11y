import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  vite: {
    ssr: {
      noExternal: ["intl-tel-input"]
    }
  }
});
