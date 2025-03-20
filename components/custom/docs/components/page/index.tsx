import React from "react"

export const DocsPageLayout = React.forwardRef<
HTMLDivElement,
React.InputHTMLAttributes<HTMLParagraphElement>
>(({ className, type, ...props }, ref) => {
    return <main className="container mx-auto py-6 md:py-4" ref={ref}>{props.children}</main>
 
})

