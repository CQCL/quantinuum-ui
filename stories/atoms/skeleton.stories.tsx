import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "src";

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  args: { className: "h-10 w-full" },
};

export default meta;

export const Default: StoryObj<typeof Skeleton> = {
  args: {},
};
