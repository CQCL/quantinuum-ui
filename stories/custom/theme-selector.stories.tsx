import { Meta, StoryObj } from "@storybook/react";
import { ThemeSelector, useMode  } from "src/custom/theme-selector";
export function ThemeSelectorDemo() {
  const { mode, setMode } = useMode();
  return <ThemeSelector  mode={mode} setMode={setMode} />;
}

const meta: Meta<typeof ThemeSelectorDemo> = {
  component: ThemeSelectorDemo,
};

export default meta;

export const Default: StoryObj<typeof ThemeSelectorDemo> = {
  args: {},
};
