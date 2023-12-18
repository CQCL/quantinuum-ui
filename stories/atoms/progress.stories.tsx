import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "src/atoms/progress";

const meta: Meta<typeof Progress> = {
  component: Progress,
};

export default meta;

export const Default: StoryObj<typeof Progress> = {
  args: {},
};