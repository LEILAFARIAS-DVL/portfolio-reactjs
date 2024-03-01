import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  build: {
    outDir: "build",
  },
  plugins: [svgr()],
  server: {
    open: true, // Isso abrirá o navegador automaticamente
  },
});
