import { Meta, StoryObj } from "@storybook/react";
import { ThemeSelector  } from "src/custom/theme-selector";
export function ThemeSelectorDemo() {

  return <ThemeSelector  />;
}

const meta: Meta<typeof ThemeSelectorDemo> = {
  component: ThemeSelectorDemo,
};

export default meta;

export const Default: StoryObj<typeof ThemeSelectorDemo> = {
  args: {},
};
