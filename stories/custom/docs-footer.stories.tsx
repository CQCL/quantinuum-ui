import { Meta, StoryObj } from "@storybook/react";
import {DocsFooter } from "src";


export function DocsNavDemo() {
  return <DocsFooter />;
}

const meta: Meta<typeof DocsNavDemo> = {
  component: DocsNavDemo,
};

export default meta;

export const Default: StoryObj<typeof DocsNavDemo> = {
  args: {},
};
