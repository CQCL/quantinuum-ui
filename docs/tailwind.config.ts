import type { Config } from 'tailwindcss'
export default {
  content: ["./**/*.{html,js}"],
  relative: true,
  presets: [require('../theme/tailwind.config')],
} satisfies Config
