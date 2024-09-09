'use client'
import { ComputerIcon, MoonIcon, SunIcon } from "lucide-react";
import React from "react";
import { Button } from "src/shadcn/ui/button";
import { getTheme, subscribeToTheme, setTheme } from "src/utils/darkMode";

export const useMode = () => {
  const [mode, _setTheme] = React.useState(getTheme().mode);

  React.useEffect(() => {
    subscribeToTheme((theme) => {
      _setTheme(theme.mode)
      document.body.setAttribute("data-theme",  theme.isDark ? "dark" : 'light') 
    })
  }, [])
  return { mode, setMode: (_mode: typeof mode) => setTheme(_mode) }
}

export const ThemeSelector = ({mode, setMode}: ReturnType<typeof useMode>) => {

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
  } satisfies Record<typeof mode, unknown>
  return (
    <Button className="aspect-square" variant="outline" size="icon" aria-label={`mode-${mode}`} onClick={() => {
      if (mode === "dark") setMode('light')
      if (mode === "light") setMode("system")
      if (mode === "system") setMode("dark")
    }}>
      {stateMap[mode].icon}
    </Button>
  )
 
};
