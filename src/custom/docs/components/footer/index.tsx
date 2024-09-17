import { QuantinuumLogo } from "../../QuantinuumLogo";
import { Separator } from "src";
export const Footer = (props: { subtitle: string, columns: {
    title: string;
    items: {
        name: string;
        href: string;
    }[];
}[] }) => {
  return (
    <div className="mb-24">

      <div className="my-24"></div>
        <Separator/>
        <div className="my-12"></div>

    <footer className="text-muted-foreground flex w-full flex-col justify-between md:items-start lg:flex-row ">
      <div className="mb-12 md:mb-0">
        <div className="-mt-4">
          <a href="https://www.quantinuum.com/" target='_blank' className='hover:opacity-75 transition'>
          <QuantinuumLogo/>
          </a>
        </div>
        <p className="max-w-[24rem] text-xs leading-5">
          Copyright © {new Date().getFullYear()} Quantinuum Inc. All rights reserved.{' '}
          <br /> {props.subtitle}
        </p>
        <div className='flex items-center gap-2 mt-2'>
        <a href="https://www.quantinuum.com/terms-conditions" target="_blank" className='font-medium text-xs tracking-tight text-blue-600 dark:text-blue-300'>Terms and Conditions</a> <div>/</div>  <a target="_blank" href="https://www.quantinuum.com/privacy-statement" className='font-medium text-xs tracking-tight text-blue-600 dark:text-blue-300'>Privacy Policy</a><div>/</div>  <a target="_blank" href="https://www.quantinuum.com/cookie-notice" className='font-medium text-xs tracking-tight text-blue-600 dark:text-blue-300'>Cookie Notice</a>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-24">
        {props.columns.map((col) => {
          return (
            <div key={col.title} className="flex flex-col md:items-end">
              <span className="text-foreground text-left text-[0.675rem] font-semibold uppercase tracking-wide md:text-right">
                {col.title}
              </span>
              <ul className="mt-3 flex flex-col gap-2 md:text-right">
                {col.items.map((item) => {
                  return (
                    <li key={item.name}>
                      <a
                        className="text-muted-foreground text-[0.85rem] font-medium"
                        href={item.href}
                      >
                        {item.name}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </footer>
    </div>
  )
}
