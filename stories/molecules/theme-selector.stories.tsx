import { Meta, StoryObj } from "@storybook/react";
import { ThemeSelector, useTheme } from "src/molecules/theme-selector";
export function ThemeSelectorDemo() {
  const { theme, setMode } = useTheme();
  return <ThemeSelector theme={theme} setMode={setMode} />;
}

const meta: Meta<typeof ThemeSelectorDemo> = {
  component: ThemeSelectorDemo,
  title: "molecules/theme-selector",
};

export default meta;
type Story = StoryObj<typeof ThemeSelectorDemo>;

export const Default: Story = {
  args: {},
};
