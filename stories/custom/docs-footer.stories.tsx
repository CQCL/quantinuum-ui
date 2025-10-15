import { Meta, StoryObj } from "@storybook/react-vite";
import { DocsFooter } from "src";


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
