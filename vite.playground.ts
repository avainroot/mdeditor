import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    tailwindcss(),
  ],
  root: "playground",
  resolve: {
    alias: {
      "@lib": resolve(__dirname, "src/index.ts"),
      "@context": resolve(__dirname, "src/context"),
      "@provider": resolve(__dirname, "src/provider"),
      "@components": resolve(__dirname, "src/components"),
      "@hooks": resolve(__dirname, "src/hooks"),
      "@editor-types": resolve(__dirname, "src/ypes"),
    },
  },
});
