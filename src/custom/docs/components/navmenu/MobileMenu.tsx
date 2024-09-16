

import {
    Button,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "src"
import { MenuIcon } from "lucide-react"
import { NavConfig  } from "./schema"

  export const MobileMenu = (props: Pick<NavConfig, 'navTextLinks'>) => {
    return <DropdownMenu>
    <DropdownMenuTrigger asChild><Button variant='outline' className="w-8 p-0 h-8"> <MenuIcon/></Button></DropdownMenuTrigger>
    <DropdownMenuContent>
        {props.navTextLinks.map(link => {
            return   <DropdownMenuItem asChild key={link.title}><a href={link.href}>{link.title}</a></DropdownMenuItem>
        })}
    </DropdownMenuContent>
  </DropdownMenu>
  }
