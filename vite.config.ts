import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es", 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
    // Because we try to use it independently, we don’t exclude lit.
    // rollupOptions: {
    //   external: /^lit/,
    // },
  },
});