

import {
    Button,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "src"
import { MenuIcon } from "lucide-react"

  export const MobileMenu = (props: {
    navTextLinks: {
      href: string,
      title: string,
      logo: JSX.Element,
      description: string,
      dropDown: {
        href: string,
        title: string, 
      }[],
    }[];
  }) => {
    return <DropdownMenu>
    <DropdownMenuTrigger asChild><Button variant='outline' className="w-8 p-0 h-8"> <MenuIcon/></Button></DropdownMenuTrigger>
    <DropdownMenuContent>
        {props.navTextLinks.map(link => {
            return   <DropdownMenuItem asChild key={link.title}><a href={link.href}>{link.title}</a></DropdownMenuItem>
        })}
    </DropdownMenuContent>
  </DropdownMenu>
  }
