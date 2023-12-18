import type { Meta, StoryObj } from "@storybook/react";

import { Separator } from "src/atoms/separator";

const meta: Meta<typeof Separator> = {
  component: Separator,
};

export default meta;

export const Default: StoryObj<typeof Separator> = {
  args: {},
};
