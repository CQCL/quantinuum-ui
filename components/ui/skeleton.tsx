import React from "react"
import { cn } from "lib"

const Skeleton = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({className, ...props}, ref) => {
  return <div
      className={cn("animate-pulse rounded-md bg-primary/10", className)}
      aria-busy="true"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuetext="Please wait..."
      {...props}
      ref={ref}
    />
})
export { Skeleton }
