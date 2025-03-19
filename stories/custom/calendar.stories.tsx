import { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "src/custom/calendar";
export function CalendarDemo() {
  return <Calendar></Calendar>
}

const meta: Meta<typeof CalendarDemo> = {
  component: CalendarDemo,
};

export default meta;

export const Default: StoryObj<typeof CalendarDemo> = {
  args: {},
  name: 'Calendar'
};
