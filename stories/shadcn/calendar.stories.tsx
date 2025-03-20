"use client";

import * as React from "react";

import { Calendar } from "index";

export function CalendarDemo() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(),
  });

  return (
    <Calendar
      mode="range"
      selected={dateRange}
      onSelect={setDateRange}
      className="rounded-md border shadow-sm"
    />
  );
}

import type { Meta } from "@storybook/react";
import { DateRange } from "react-day-picker";

import type { StoryObj } from "@storybook/react";

const meta: Meta<typeof CalendarDemo> = {
  component: CalendarDemo,
};

export default meta;

export const Default: StoryObj<typeof CalendarDemo> = {
  args: {},
};
