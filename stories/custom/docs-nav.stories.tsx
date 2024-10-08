import { Meta, StoryObj } from "@storybook/react";
import {DocsNavBar } from "src";

export function DocsNavDemo() {
  return <DocsNavBar activePath="/" />;
}

const meta: Meta<typeof DocsNavDemo> = {
  component: DocsNavDemo,
};

export default meta;

export const Default: StoryObj<typeof DocsNavDemo> = {
  args: {},
};
