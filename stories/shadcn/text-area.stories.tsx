import type { Meta } from "@storybook/react-vite";
import { Textarea } from "src";

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  args: {
    placeholder: "Type your message here.",
  },
};

export default meta;
