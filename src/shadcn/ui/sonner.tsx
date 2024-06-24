"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner} from "sonner"
export * as sonner from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

export const SonnerToast = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toaster]:bg-muted group-[.toaster]:text-muted-foreground bg-red",
                
                closeButton:
                "group-[.toaster]:bg-muted group-[.toaster]:border-border group-[.toaster]:text-foreground bg-red group-[.toaster]:hover:text-background",
                    },
      }}
      {...props}
    />
  )
}
