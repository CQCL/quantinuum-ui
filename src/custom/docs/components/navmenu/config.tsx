import { ComponentProps } from 'react'
import { z } from 'zod';


const linkSchema = z.object({
    href: z.string(),
    title: z.string(),
    external: z.boolean().optional().default(false),
});
export const navConfigSchema = z.object({
    navTextLinks: z.array(linkSchema),
    navIconLinks: z.array(z.intersection(linkSchema, z.object({iconImageURL: z.string()}))),
    navProductName: z.string()
})



export type ActivePaths = (z.infer<typeof navConfigSchema>['navTextLinks'])[number]['href']
export const RegularLink = (props: ComponentProps<'a'>) => <a {...props}></a>
