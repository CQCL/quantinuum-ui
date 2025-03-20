import { FontBoldIcon } from "@radix-ui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";

import { Toggle } from "index";

const meta: Meta<typeof Toggle> = {
  component: () => {
    return (
      <Toggle aria-label="Toggle italic">
        <FontBoldIcon className="h-4 w-4" />
      </Toggle>
    );
  },
};

export default meta;

export const Default: StoryObj<typeof Toggle> = {
  args: {},
};
