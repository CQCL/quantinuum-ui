import { ComponentProps } from 'react'
import { z } from 'zod';


const linkSchema = z.object({
    href: z.string(),
    title: z.string(),
    external: z.boolean().optional(),
});
export const navConfigSchema = z.object({
    navTextLinks: z.array(linkSchema),
    navIconLinks: z.array(z.intersection(linkSchema, z.object({iconImageURL: z.string()}))),
    navProductName: z.string()
})
export type NavConfig = z.infer<typeof navConfigSchema>
export type ActivePaths = (NavConfig['navTextLinks'])[number]['href']
const defaultLink = (props: ComponentProps<'a'>) => <a {...props}></a>
export type Link = typeof defaultLink
