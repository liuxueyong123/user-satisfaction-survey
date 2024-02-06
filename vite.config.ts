import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es", 'cjs', 'umd'],
      fileName: (format) => `index.${format}.js`,
      name: "UserSatisfactionSurvey"
    },
    // Because we try to use it independently, we don’t exclude lit.
    // rollupOptions: {
    //   external: /^lit/,
    // },
  },
  plugins: [
    dts({
      entryRoot: "./src",
      outDir: "./dist/types",
      tsconfigPath: "./tsconfig.json",
    }),
  ]
});