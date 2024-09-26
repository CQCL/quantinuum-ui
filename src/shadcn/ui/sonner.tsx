"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { cn } from "src/utils";
export * as sonner from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

export const SonnerToast = ({
  theme,
  className,
  toastOptions,
  ...props
}: ToasterProps) => {
  const { theme: defaultTheme = "system" } = useTheme();
  return (
    <Sonner
      theme={theme ?? (defaultTheme as ToasterProps["theme"])}
      className={cn("toaster group", className)}
      toastOptions={{
        ...toastOptions,
        classNames: {
          toast: cn(
            "group toast group-[.toaster]:bg-card group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
            toastOptions?.classNames?.toast
          ),
          description: cn(
            "group-[.toast]:text-muted-foreground",
            toastOptions?.classNames?.description
          ),
          actionButton: cn(
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
            toastOptions?.classNames?.actionButton
          ),
          cancelButton: cn(
            "group-[.toaster]:bg-muted group-[.toaster]:text-muted-foreground bg-red",
            toastOptions?.classNames?.cancelButton
          ),
          closeButton: cn(
            "group-[.toaster]:bg-muted group-[.toaster]:border-border group-[.toaster]:text-foreground bg-red group-[.toaster]:hover:text-muted-foreground",
            toastOptions?.classNames?.closeButton
          ),
        },
      }}
      {...props}
    />
  );
};
