import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import path from "path";
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
      }),
      // CSS vendor prefixing etc.
      postcss({
        extract: path.resolve("./dist/tokens.css"),
        config: "./postcss.config.js",
      }),
      // copy({
      //   targets: [{ src: "./src/styles.css", dest: "./dist" }],
      // }),
      // Minify output.
      terser(),
    ],
  },
];
