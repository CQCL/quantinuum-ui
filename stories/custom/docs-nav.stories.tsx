import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import {DocsNavBar } from "src";

export function DocsNavDemo() {
  return <DocsNavBar activePath="/" linkComponent={(props: ComponentProps<'a'>) => <a {...props}></a>} />;
}

const meta: Meta<typeof DocsNavDemo> = {
  component: DocsNavDemo,
};

export default meta;

export const Default: StoryObj<typeof DocsNavDemo> = {
  args: {},
};
