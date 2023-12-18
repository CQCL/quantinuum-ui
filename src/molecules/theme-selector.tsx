import { ComputerIcon, MoonIcon, SunIcon } from "lucide-react";
import React from "react";
import { ToggleGroup, ToggleGroupItem } from "src/atoms/toggle-group";
import { theme as _theme } from "src/utils";

export const useTheme = () => {
  const [theme, _setTheme] = React.useState(_theme.get());
  React.useEffect(() => {
    _theme.subscribe(() => {
      _setTheme(_theme.get());
    });
  }, []);

  return { theme, setMode: _theme.set };
};
export const ThemeSelector = (props: ReturnType<typeof useTheme>) => {
  return (
    <ToggleGroup
      type="single"
      onValueChange={(mode: (typeof props.theme)["mode"]) =>
        props.setMode(mode)
      }
      value={props.theme.mode}
    >
      <ToggleGroupItem value="dark" aria-label="Select dark mode">
        <MoonIcon className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="light" aria-label="Select light theme">
        <SunIcon className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="system" aria-label="Select system theme">
        <ComputerIcon className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};