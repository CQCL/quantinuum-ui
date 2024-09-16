'use client'
import { Navigation } from './NavigationMenu'
import { ComponentProps } from 'react'
import { Link } from './config'
import { QuantinuumLogo } from './QuantinuumLogo'
import { MobileMenu } from './MobileMenu'
import { QuantinuumIdent } from './QuantinuumIdent'
import { ModeSelector } from './ModeSelector'
import { NavConfig } from './schema'

export const NavBar = (props: {
  linkComponent?: Link
  activePath: string
} & NavConfig) => {
  const Link = props.linkComponent
    ? props.linkComponent
    : (props: ComponentProps<'a'>) => <a {...props}></a>
  return (
    <div className="bg-background text-foreground border-border sticky top-0 z-[100] w-full border-b text-sm">
      <div className=" bg-background px-3 md:px-4 mx-auto max-w-[90rem] flex h-14 items-center justify-between">
        <div className="mr-4 flex items-center">
          <div className='block md:hidden mr-3'>
            <MobileMenu {...props}/>
          </div>
          <div className="whitespace-nowrap flex items-center  gap-2">
          <a href="https://docs.quantinuum.com/" aria-label='Quantinuum Docs' title="Quantinuum Docs"   className='hover:cursor-pointer hover:opacity-50 transition'>
            <div className='hidden sm:block'><QuantinuumLogo />
            </div>
            <div className='block sm:hidden'>
              <QuantinuumIdent/>
            </div>
            </a>
            <div className="text-muted-foreground text-xs font-medium flex items-center gap-1.5">
              <div className='mx-0.5 text-muted-foreground/50'>|</div><div>{props.navProductName}</div>
            </div>
          </div>
          <Link href="/" className="ml-4 mr-4 flex items-center space-x-2">
            <span className="hidden font-bold">Quantinuum</span>
          </Link>
       
        </div>
        <div className="flex items-center gap-5">
          
        <Navigation activePath={props.activePath} linkComponent={Link} navTextLinks={props.navTextLinks} />
          <div className="flex items-center gap-2">
            {props.navIconLinks.map(link => {
                return <Link href={link.href} target='_blank' key={link.title}>
               <img src={link.iconImageURL} className='dark:invert flex-shrink-0 min-w-6 max-w-6 min-h-6 max-h-6 hover:opacity-70 transition'></img>
             </Link>
            })}
          </div>
          <div className='w-px h-6 bg-muted-foreground/50'></div>
          <ModeSelector />
        </div>
      </div>
    </div>
  )
}
