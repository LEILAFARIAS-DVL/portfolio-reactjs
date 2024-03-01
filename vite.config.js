import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  build: {
    outDir: "build",
  },
  plugins: [svgr()],
  server: {
    port: 3000, // porta para o servidor de desenvolvimento
    open: true, // abre o navegador automaticamente
  },
});
