
import React, { ComponentProps } from 'react'
import NextLink from 'next/link'
import { QuantinuumLogo } from '../QuantinuumLogo'
import { GithubIcon, SlackIcon } from 'lucide-react'
import { FaGithub, FaSlack, FaStackExchange } from 'react-icons/fa'
import {IoLogoSlack} from 'react-icons/io'
import { MobileMenu } from './MobileMenu'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from 'src'
import { NavConfig } from './schema'

export type NavItem = {
  title: string
  href: string
  target?: string
  pathMatch: string
  megamenu?: {
    title: string
    href: string
    description: string
  }[]
}

export type IconLink = {
  title: string
  href: string
  target?: string
}

export type ActivePaths = NavItem['href']
const defaultLink = (props: ComponentProps<'a'>) => <a {...props}></a>
export type Link = typeof NextLink | typeof defaultLink

export const DocsNavigationBar = (props: {
  linkComponent?: Link
  activePath: string
} & NavConfig) => {
  const Link = props.linkComponent
    ? props.linkComponent
    : (props: ComponentProps<'a'>) => <a {...props}></a>
    const isActivePath = (activePath: string, path: string) => {
      return activePath.startsWith(path)
    }
  return (
    <div className="bg-background text-foreground border-border sticky top-0 z-[100] w-full border-b text-sm">
      <div className=" bg-background container flex h-14 items-center justify-between">
        <div className="mr-4 flex items-center">
        <div className='block md:hidden mr-3'>
            <MobileMenu {...props}></MobileMenu>
            </div>
          <div className=" whitespace-nowrap flex items-center gap-2">
            <QuantinuumLogo></QuantinuumLogo>
            <div className="text-muted-foreground text-xs font-medium">
              | TKET
            </div>
          </div>
          <a href="/" className="ml-4 mr-4 flex items-center space-x-2">
            <span className="hidden font-bold">Quantinuum</span>
          </a>
          <NavigationMenu className="place-self-center sm:block">
      <NavigationMenuList className="hidden md:flex">
        {props.navTextLinks.map((item) => {
          return (
            <NavigationMenuItem key={item.title}>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                asChild
                active={isActivePath(props.activePath, item.href)}
              >
                <Link href={item.href}>
                  {item.title}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
        </div>

        <div className="flex items-center">
          <div className="flex items-center gap-3">
            <Link href="https://github.com/CQCL/tket" target="_blank">
              <FaGithub className="text-foreground hover:text-muted-foreground h-[1.5rem] w-[1.5rem] transition" />
            </Link>
            <Link href="https://tketusers.slack.com/" target="_blank">
              <FaSlack className="text-foreground hover:text-muted-foreground h-6 w-6 transition" />
            </Link>
            <Link
              href="https://quantumcomputing.stackexchange.com/questions/tagged/pytket"
              target="_blank"
            >
              <FaStackExchange className="text-foreground hover:text-muted-foreground h-5 w-5 transition"></FaStackExchange>
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  )
}
