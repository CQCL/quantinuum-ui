import { z } from 'zod';


const ItemsSchema = z.object({
    name: z.string(),
    href: z.string()
})


export const FooterSchema = z.object({
    "title": z.string(),
    "items": z.array(ItemsSchema)
})
