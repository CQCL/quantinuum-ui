import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import {DocsNavBar } from "index";

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
