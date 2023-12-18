import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "src/atoms/slider";

const meta: Meta<typeof Slider> = {
  component: Slider,
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    defaultValue: [33],
    max: 100,
    step: 1,
  },
};
