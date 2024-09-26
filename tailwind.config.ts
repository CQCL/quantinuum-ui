import { Config } from "tailwindcss";
import { tailwindTheme } from "./src";
export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: ["./src/**/*.{ts,tsx}", "./stories/**/*.{ts,tsx}"],
  presets: [tailwindTheme],
} satisfies Config;
