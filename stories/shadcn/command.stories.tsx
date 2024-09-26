import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "src";

import type { Meta, StoryObj } from "@storybook/react";

const CommandDemo = () => {
  return (
    <Command className='rounded border shadow-md'>
      <CommandInput placeholder='Type a command or search...' />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading='Suggestions'>
          <CommandItem>
            <CalendarIcon className='mr-2 h-4 w-4' />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <FaceIcon className='mr-2 h-4 w-4' />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <RocketIcon className='mr-2 h-4 w-4' />
            <span>Launch</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading='Settings'>
          <CommandItem disabled>
            <PersonIcon className='mr-2 h-4 w-4' />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <EnvelopeClosedIcon className='mr-2 h-4 w-4' />
            <span>Mail</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <GearIcon className='mr-2 h-4 w-4' />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

const meta: Meta<typeof CommandDemo> = {
  component: CommandDemo,
};

export default meta;

export const Default: StoryObj<typeof CommandDemo> = {
  args: {},
};
