import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "src";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

export const Default: StoryObj<typeof Button> = {
  args: {},
};
