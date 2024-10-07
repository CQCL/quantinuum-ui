import { ComponentProps } from 'react'
import React from 'react';
import { z } from 'zod';

const dropDownSchema = z.object({
    href: z.string(),
    title: z.string(), 
});
const linkSchema = z.object({
    href: z.string(),
    title: z.string(),
    logo: z.custom<React.JSX.Element>(
        e => (e as any)?.$$typeof === Symbol.for("react.element"),
        "value must be a React Element"
    ),
    description: z.string(),
    external: z.boolean().optional(),
    dropDown: z.array(dropDownSchema),
});
export const navConfigSchema = z.object({
    navTextLinks: z.array(linkSchema),
})
export type NavConfig = z.infer<typeof navConfigSchema>
export type ActivePaths = (NavConfig['navTextLinks'])[number]['href']
const defaultLink = (props: ComponentProps<'a'>) => <a {...props}></a>
export type Link = typeof defaultLink
