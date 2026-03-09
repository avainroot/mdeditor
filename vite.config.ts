import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    visualizer({ open: true }),
    cssInjectedByJsPlugin(),
    react(),
    // react({
    //   babel: {
    //     plugins: [["babel-plugin-react-compiler"]],
    //   },
    // }),
    dts({ include: ["src"] }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es", "cjs"],
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
    },
  },
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/components"),
      "@context": resolve(__dirname, "src/context"),
      "@provider": resolve(__dirname, "src/provider"),
      "@hooks": resolve(__dirname, "src/hooks"),
      "@editor-types": resolve(__dirname, "src/types"),
    },
  },
});
