"use client";

import * as React from "react";

import { Calendar } from "src/atoms/calendar";

export function CalendarDemo() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(),
  });

  return (
    <Calendar
      mode="range"
      selected={dateRange}
      onSelect={setDateRange}
      className="rounded-md border shadow"
    />
  );
}

import type { Meta, StoryObj } from "@storybook/react";
import { DateRange } from "react-day-picker";

const meta: Meta<typeof CalendarDemo> = {
  component: CalendarDemo,
};

export default meta;
type Story = StoryObj<typeof CalendarDemo>;

export const Default: Story = {
  args: {
    children: "default",
  },
};
