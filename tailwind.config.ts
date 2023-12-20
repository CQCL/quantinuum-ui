import { Config } from "tailwindcss";
import { tailwindTheme } from "./src";
export default {
  content: ["./src/**/*.{ts,tsx}", "./stories/**/*.{ts,tsx}"],
  presets: [tailwindTheme],
} satisfies Config;
