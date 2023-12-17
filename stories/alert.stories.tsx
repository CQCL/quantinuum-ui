import { RocketIcon } from "@radix-ui/react-icons";
import { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { Alert, AlertDescription, AlertTitle } from "src/components/ui/alert";
export function AlertDemo() {
  return (
    <Alert>
      <RocketIcon className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  );
}
const meta: Meta<typeof AlertDemo> = {
  component: AlertDemo,
};

export default meta;
type Story = StoryObj<typeof AlertDemo>;

export const Default: Story = {
  args: {},
};
