import { Meta, StoryObj } from "@storybook/react";
import { DocsFooter } from "index";


export function DocsFooterDemo() {
  return <DocsFooter />;
}

const meta: Meta<typeof DocsFooterDemo> = {
  component: DocsFooterDemo,
};

export default meta;

export const Default: StoryObj<typeof DocsFooterDemo> = {
  args: {},
};
