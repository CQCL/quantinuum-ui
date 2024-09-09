'use client'
import { ComputerIcon, MoonIcon, SunIcon } from "lucide-react";
import React from "react";
import { Button } from "src/shadcn/ui/button";
import { getTheme, subscribeToTheme, setTheme } from "src/utils/darkMode";


export const ThemeSelector = () => {

  const [theme, _setTheme] = React.useState(getTheme());

  React.useEffect(() => {
    subscribeToTheme((theme) => _setTheme(theme))
  }, [])


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
  } satisfies Record<typeof theme['mode'], unknown>
  return (
    <Button className="aspect-square" variant="outline" size="icon" aria-label={`mode-${theme.mode}`} onClick={() => {
      if (theme.mode === "dark") setTheme('light')
      if (theme.mode === "light") setTheme("system")
      if (theme.mode === "system") setTheme("dark")
    }}>
      {stateMap[theme.mode].icon}
    </Button>
  )
 
};
