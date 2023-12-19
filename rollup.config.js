import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";
import preserveDirectives from "rollup-plugin-preserve-directives";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        dir: "dist/",
        format: "esm",
        preserveModules: true,
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
        declarationDir: "./dist/types",
      }),
      // CSS vendor prefixing etc.
      copy({
        targets: [{ src: "./src/tokens.css", dest: "./dist" }],
      }),
      // Minify output.
      terser({ compress: { directives: false } }),
      preserveDirectives(),
    ],
  },
];
