
import { cn } from 'src'
import React from 'react'
import { CodeCopy } from './CodeCopy'

const Title = React.forwardRef<
HTMLHeadingElement,
React.InputHTMLAttributes<HTMLParagraphElement>
>(({ className, type, ...props }, ref) => {
return (
  <h1
    className={cn('text-6xl font-semibold tracking-tighter', className)}
    ref={ref}
  >
    {props.children}
  </h1>
)
})
Title.displayName = 'Title'

const Subtitle = React.forwardRef<
HTMLHeadingElement,
React.InputHTMLAttributes<HTMLParagraphElement>
>(({ className, type, ...props }, ref) => {
return (
  <h2
    className={cn('text-muted-foreground mt-5 mb-4 text-2xl tracking-tighter', className)}
    ref={ref}
  >
    {props.children}
  </h2>
)
})
Subtitle.displayName = 'Subtitle'

const Left = React.forwardRef<
HTMLDivElement,
React.InputHTMLAttributes<HTMLParagraphElement>
>(({ className, type, ...props }, ref) => {

  return<div className="relative mx-auto flex flex-grow flex-wrap flex-col py-4">
   <div className="mb-4 mt-0 md:mt-6 flex flex-col" ref={ref}>{props.children}</div></div>
 
})
Left.displayName = 'Left'

const Right = React.forwardRef<
HTMLDivElement,
React.InputHTMLAttributes<HTMLParagraphElement>
>(({ className, type, ...props }, ref) => {

  return <div className="mt-0 mr-10 hidden lg:flex md:justify-end" ref={ref}>{props.children}</div>
 
})
Right.displayName = 'Right'




// mt-4 flex flex-col max-w-[32rem] gap-3

const Wrapper  = React.forwardRef<
HTMLDivElement,
React.InputHTMLAttributes<HTMLParagraphElement>
>(({ className, type, ...props }, ref) => {
  return  <div className="flex w-full my-4" ref={ref}>
      {props.children}</div>
 
})
Wrapper.displayName = 'Wrapper'

const LeftTitle = Title
const LeftSubtitle = Subtitle;

export {Wrapper, Right, Left, LeftTitle, LeftSubtitle, CodeCopy}
