import { Card,  CardTitle, CardSubtitle  } from './Card'
import NextImage from 'next/image'
import { z } from 'zod'
import { ComponentProps } from 'react'

const linkSchema = z.object({
  title: z.string(),
  description: z.string(),
  link: z.string(),
})

const cardSchema = z.array(
  z.object({
    title: z.string(),
    subtitle: z.string(),
    icon: z.string(),
    image_link: z.string(),
    image_description: z.string(),
    links: z.array(linkSchema),
  }))


  const regularLink = (props: ComponentProps<'a'>) => <a {...props}></a>

export const TripleCard = (props: {cards: z.infer<typeof cardSchema>, imageComponent: typeof NextImage | typeof regularLink  }) => {

  return (
    <div className="shadow-lg rounded-xl grid grid-cols-1 items-stretch md:grid-cols-3 ">
      {props.cards.map((item, idx, arr) => {
        return (
          <Card
            key={item.title}
            className={(() => {
              if (idx === 0) {
                return 'md:border-b-1 rounded-r-none border-b-none rounded-b md:rounded-bl-xl  md:border-r-0'
              }
              if (idx === arr.length - 1) {
                return 'md:border-b-1 rounded-l-none rounded-t-none border-t-0  md:rounded-tr-xl  md:border-t  md:border-l-0'
              }
              return 'rounded-none border-t-0 md:border-t'
            })()}
          >

            <CardTitle className="mt-1 -mb-0.5 text-[1.4rem]">
              {item.title}
            </CardTitle>
            <CardSubtitle>{item.subtitle}</CardSubtitle>
            {item.image_link ? (
              <div className="h-[19rem] md:h-[14rem] -my-4 flex justify-center dark:invert dark:brightness-[0.91] dark:grayscale">
                <props.imageComponent
                  alt={item.image_description}
                  height={300}
                  src={item.image_link}
                  width={300}
                  style={{ objectFit: 'contain' }}
                  priority
                /> 
              </div>
            ) : (
              null
            )}
            <div className="my-4"></div>
            <ul className="mt-5 flex flex-col gap-4">
              {item.links.map((link) => {
                return (
                  <li key={link.title}>
        
                    <a
                      className="font-semibold tracking-tight text-blue-600 dark:text-blue-300"
                      href={link.link}
                    >
                      {link.title}
                    </a>
                    <div className="my-2"></div>
                    <div className="text-muted-foreground text-xs leading-4">
                      {link.description}
                    </div>
                  </li>
                )
              })}
            </ul>
          </Card>
        )
      })}
    </div>
  )
}
