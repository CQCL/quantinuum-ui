import type { Meta, StoryObj } from "@storybook/react";

import { Separator } from "index";

const meta: Meta<typeof Separator> = {
  component: Separator,
};

export default meta;

export const Default: StoryObj<typeof Separator> = {
  args: {},
};
