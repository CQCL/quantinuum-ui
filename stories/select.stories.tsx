import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "src/components/ui/select";

const meta: Meta<typeof Select> = {
  component: (args) => {
    const [value, setValue] = React.useState(args.value);
    return (
      <div>
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Search: Story = {
  args: {
    value: "light",
  },
};
