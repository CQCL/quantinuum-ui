
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuList,
  NavigationMenuContent,
} from 'src'

import { RegularLink } from './config'
import { NavConfig } from './schema'
import NextLink from 'next/link'


export const Navigation = (props: {
  activePath: string
} & Pick<NavConfig, 'navTextLinks'>) => {
  const isActivePath = (activePath: string, path: string) => {
    return activePath.startsWith(path)
  }
  return (
    <NavigationMenu className="place-self-center sm:block">
      <NavigationMenuList className="hidden md:flex">
        { props.navTextLinks.map((item) => {
          return (
            <NavigationMenuItem key={item.title}>
              <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]"> 
                  <li className="row-span-4">
                    <NavigationMenuLink asChild>
                      <RegularLink
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href={item.href}
                      >
                        {item.logo}
                        <p className="text-sm leading-tight text-muted-foreground py-6">
                          {item.description}
                        </p>
                      </RegularLink>
                    </NavigationMenuLink>
                  </li>
                  { item.dropDown.map((subtitle) => {
                    return (
                    <li>
                      <NavigationMenuLink asChild>
                        <RegularLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href={subtitle.href}
                        >
                          <div className="text-sm font-medium leading-none">{subtitle.title}</div>
                        </RegularLink>
                      </NavigationMenuLink>
                    </li>
                  )})}
                  </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
