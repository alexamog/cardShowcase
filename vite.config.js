import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/cardShowcase/",
  homepage: "https://alexamog.github.io/cardShowcase",
  plugins: [react()],
});
