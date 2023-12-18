import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Label } from "src/atoms/label";
import { RadioGroup, RadioGroupItem } from "src/atoms/radio-group";

const meta: Meta<typeof RadioGroup> = {
  component: (args) => {
    const [value, setValue] = React.useState(args.value);
    return (
      <div>
        <RadioGroup {...args} value={value} onValueChange={setValue}>
          {["apples", "bananas", "oranges"].map((item) => (
            <div className="flex items-center gap-2" key={item}>
              <RadioGroupItem value={item} />
              <Label htmlFor={item}>{item}</Label>
            </div>
          ))}
        </RadioGroup>
        <p className="mt-4">Selected Value: {value}</p>
      </div>
    );
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Search: Story = {
  args: {
    value: "apples",
  },
};
