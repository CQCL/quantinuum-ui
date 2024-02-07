import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/navbar/nav.tsx"],
  format: ["iife"],
  minify: true,
  target: "esnext",
  outDir: "pytket-nexus/docs/source/_static/",
  platform: "browser",
});
