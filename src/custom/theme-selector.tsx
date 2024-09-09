'use client'
import { ComputerIcon, MoonIcon, SunIcon } from "lucide-react";
import React from "react";
import { Button } from "src/shadcn/ui/button";
import { getTheme, subscribeToTheme, setTheme } from "src/utils/darkMode";

export const useTheme = () => {
  const [theme, _setLocalTheme] = React.useState(getTheme());

  React.useEffect(() => {
    subscribeToTheme((theme) => {
      _setLocalTheme(theme)
      document.body.setAttribute("data-theme",  theme.isDark ? "dark" : 'light') 
    })
  }, [])
  return { theme, setMode: (_mode: typeof theme['mode']) => setTheme(_mode) }
}

export const ThemeSelector = ({theme, setMode}: ReturnType<typeof useTheme>) => {

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
      if (theme.mode === "dark") setMode('light')
      if (theme.mode === "light") setMode("system")
      if (theme.mode === "system") setMode("dark")
    }}>
      {stateMap[theme.mode].icon}
    </Button>
  )
 
};
