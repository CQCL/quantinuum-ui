import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "src/atoms/slider";

const meta: Meta<typeof Slider> = {
  component: Slider,
  args: {
    defaultValue: [33],
    max: 100,
    step: 1,
  },
};

export default meta;

export const Default: StoryObj<typeof Slider> = {
  args: {},
};
