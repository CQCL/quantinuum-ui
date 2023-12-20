import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import preserveDirectives from "rollup-plugin-preserve-directives";
import { terser } from "rollup-plugin-terser";

export default {
  onwarn(warning, warn) {
    if (
      warning.code === "MODULE_LEVEL_DIRECTIVE" &&
      warning.message.includes(`'use client'`)
    ) {
      return;
    }
    warn(warning);
  },
  input: "src/index.ts",
  output: [
    {
      dir: "dist/",
      format: "esm",
      preserveModules: true,
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      declarationDir: "./dist/types",
    }),
    copy({
      targets: [{ src: "./src/tokens.css", dest: "./dist" }],
    }),
    terser({ compress: { directives: false } }),
    preserveDirectives(),
  ],
};
