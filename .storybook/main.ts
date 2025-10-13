const config = {
  stories: ["../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@chromatic-com/storybook"
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  docs: {},

  staticDirs: ["../dist"],

  typescript: {
    reactDocgen: "react-docgen-typescript"
  },
   previewBody: (body: any) => `
    ${body}
    ${
       `<script
        src="dist/src/utils/syncTheme.js"
        type="application/javascript"
      ></script>`
    }
  `,
};
export default config;
