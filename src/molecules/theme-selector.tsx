'use client'
import { ComputerIcon, MoonIcon, SunIcon } from "lucide-react";
import React from "react";
import { Button } from "src/atoms/button";
import { theme as _theme } from "src/utils";

type Mode = ReturnType<typeof _theme['get']>['mode']
export const useTheme = () => {

  const [theme, _setTheme] = React.useState<ReturnType<typeof _theme['get']>>(typeof window !== "undefined" ? _theme.get() : {mode: "dark", isDark: true});
  React.useEffect(() => {
    _theme.subscribe(() => {
      _setTheme(_theme.get());
    });
  }, []);

  return { theme, setMode: _theme.set };
};
export const ThemeSelector = (props: ReturnType<typeof useTheme>) => {
  const stateMap = {
    "light": {
      icon: <SunIcon className="h-4 w-4" />,
    },
    "dark": {
      icon:  <MoonIcon className="h-4 w-4" />
    },
    "system": {
      icon: <ComputerIcon className="h-4 w-4" />,
    },
  } satisfies Record<typeof props['theme']['mode'], unknown>
  return (
    <Button className="aspect-square" variant="outline" size="icon" aria-label={`mode-${props.theme.mode}`} onClick={() => {
      if (props.theme.mode === "dark") props.setMode("light")
      if (props.theme.mode === "light") props.setMode("system")
      if (props.theme.mode === "system") props.setMode("dark")
    }}>
      {stateMap[props.theme.mode].icon}
    </Button>
  )
 
};
