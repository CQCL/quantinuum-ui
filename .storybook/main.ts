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
  }
};
export default config;
