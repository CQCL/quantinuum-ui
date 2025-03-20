"use client"
import type { Meta, StoryObj } from "@storybook/react";
import React, { ComponentProps } from "react";

import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectEmpty,
  MultiSelectGroup,
  MultiSelectItem,
  MultiSelectList,
  MultiSelectSearch,
  MultiSelectTrigger,
  MultiSelectValue,
} from "index"



const Demo = (args: ComponentProps<typeof MultiSelect>) => {
  const [value, setValue] = React.useState(args.value);
  return (
    <MultiSelect value={value} onValueChange={(v) => {
        setValue(v)
    }}>
    <MultiSelectTrigger className="w-96">
      <MultiSelectValue placeholder="Select stack" />
    </MultiSelectTrigger>
    <MultiSelectContent>
    <MultiSelectSearch placeholder="input any..." />
      <MultiSelectList>
        <MultiSelectGroup heading="React">
          <MultiSelectItem value="react">React</MultiSelectItem>
          <MultiSelectItem value="next">Next.js</MultiSelectItem>
          <MultiSelectItem value="remix">Remix</MultiSelectItem>
        </MultiSelectGroup>
        <MultiSelectGroup heading="Vue">
          <MultiSelectItem value="vue">Vue</MultiSelectItem>
          <MultiSelectItem value="nuxt">Nuxt</MultiSelectItem>
        </MultiSelectGroup>
        <MultiSelectGroup heading="Others">
          <MultiSelectItem value="angular">Angular</MultiSelectItem>
          <MultiSelectItem value="svelte">Svelte</MultiSelectItem>
        </MultiSelectGroup>
        <MultiSelectEmpty>
            {"No results found"}
          </MultiSelectEmpty>
      </MultiSelectList>
    </MultiSelectContent>
  </MultiSelect>
  );
};

const meta: Meta<typeof Demo> = {
  component: Demo,
};

export default meta;

export const Default: StoryObj<typeof Demo> = {
  args: {},
};
