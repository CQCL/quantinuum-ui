import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Switch } from "src/atoms/switch";

const meta: Meta<typeof Switch> = {
  component: (args) => {
    const [checked, setChecked] = React.useState<boolean>(
      args.checked ?? false
    );
    return (
      <div>
        <Switch checked={checked} onCheckedChange={setChecked}></Switch>
      </div>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    checked: true,
  },
};
