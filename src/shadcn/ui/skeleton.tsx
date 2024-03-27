import { cn } from "src/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-primary/10", className)}
      aria-busy="true"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuetext="Please wait..."
      {...props}
    />
  )
}

export { Skeleton }
