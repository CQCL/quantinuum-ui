import { Config } from 'tailwindcss'

export default {
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'],
      },
      letterSpacing: {
        supertight: '-.0575em',
      },
      colors: {
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        text: {
          DEFAULT: 'rgb(var(--color-text) / <alpha-value>)',
          weak: 'rgb(var(--color-text-weak) / <alpha-value>)',
          weakest: 'rgb(var(--color-text-weakest) / <alpha-value>)',
          'on-accent': 'rgb(var(--color-text-on-accent) / <alpha-value>)',
          link: 'rgb(var(--color-text-link) / <alpha-value>)',
          warning: 'rgb(var(--color-text-warning) / <alpha-value>)',
          danger: 'rgb(var(--color-text-danger) / <alpha-value>)',
          info: 'rgb(var(--color-text-info) / <alpha-value>)',
          success: 'rgb(var(--color-success) / <alpha-value>)',
          progress: 'rgb(var(--color-text-progress) / <alpha-value>)',
        },
        status: {
          warning: 'rgb(var(--color-status-warning) / <alpha-value>)',
          'warning-weak':
            'rgb(var(--color-status-warning-weak) / <alpha-value>)',
          neutral: 'rgb(var(--color-status-neutral) / <alpha-value>)',
          'neutral-weak':
            'rgb(var(--color-status-neutral-weak) / <alpha-value>)',
          danger: 'rgb(var(--color-status-danger) / <alpha-value>)',
          'danger-weak': 'rgb(var(--color-status-danger-weak) / <alpha-value>)',
          success: 'rgb(var(--color-status-success) / <alpha-value>)',
          'success-weak':
            'rgb(var(--color-status-success-weak) / <alpha-value>)',
          info: 'rgb(var(--color-status-info) / <alpha-value>)',
          'info-weak': 'rgb(var(--color-status-info-weak) / <alpha-value>)',
          progress: 'rgb(var(--color-status-progress) / <alpha-value>)',
          'progress-weak':
            'rgb(var(--color-status-progress-weak) / <alpha-value>)',
        },
        border: {
          DEFAULT: 'rgb(var(--color-border) / <alpha-value>)',
          strong: 'rgb(var(--color-border-strong) / <alpha-value>)',
          hover: 'rgb(var(--color-border-hover) / <alpha-value>)',
          warning: 'rgb(var(--color-border-warning) / <alpha-value>)',
          danger: 'rgb(var(--color-border-danger) / <alpha-value>)',
          success: 'rgb(var(--color-border-success) / <alpha-value>)',
          info: 'rgb(var(--color-border-info) / <alpha-value>)',
          progress: 'rgb(var(--color-border-progress) / <alpha-value>)',
        },
        icon: {
          DEFAULT: 'rgb(var(--color-icon) / <alpha-value>)',
          hover: 'rgb(var(--color-icon-hover) / <alpha-value>)',
        },
        button: {
          DEFAULT: 'rgb(var(--color-button) / <alpha-value>)',
          hover: 'rgb(var(--color-button-hover) / <alpha-value>)',
        },
        surface: {
          DEFAULT: 'rgb(var(--color-surface) / <alpha-value>)',
          raised: 'rgb(var(--color-surface-raised) / <alpha-value>)',
          lowered: 'rgb(var(--color-surface-lowered) / <alpha-value>)',
        },
        background: {
          DEFAULT: 'rgb(var(--color-background) / <alpha-value>)',
        },
      },
      fontWeight: {
        thin: 'var(--weight-thin)',
        extralight: 'var(--weight-extralight)',
        light: 'var(--weight-light)',
        normal: 'var(--weight-normal)',
        medium: 'var(--weight-medium)',
        semibold: 'var(--weight-semibold)',
        bold: 'var(--weight-bold)',
        extrabold: 'var(--weight-extrabold)',
        black: 'var(--weight-black)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Omit<Config, 'content'>
