import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import preserveDirectives from "rollup-plugin-preserve-directives";
import { terser } from "rollup-plugin-terser";
export default [{
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
      // preserveModules: true,
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: false,
    }),
    copy({
      targets: [{ src: "./src/tokens.css", dest: "./dist" }],
    }),
    terser({ compress: { directives: false } }),
    preserveDirectives(),
  ],

},
 {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  }, {
  input: "src/utils/syncTheme.ts",
  output: [
    {
      dir: "dist/src/utils/",
      format: "iife",
      name: "syncTheme",
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      outDir: "dist/src/utils/",
      declaration: false,
    }),
    terser(),
  ],
}];
