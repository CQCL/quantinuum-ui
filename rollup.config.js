import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        dir: "dist/",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      // Locate modules using the Node resolution algorithm
      resolve(),
      // Convert CommonJS modules to ES6.
      commonjs(),
      // Create typescript definitions.
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      // CSS vendor prefixing etc.
      postcss({
        extract: false,
        modules: true,
        config: "./postcss.config.js",
      }),
      // Minify output.
      terser(),
    ],
  },
];
