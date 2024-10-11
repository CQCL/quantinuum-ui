# quantinuum-ui
Quantinuum design tokens and React components.

Based on [shadcn](https://ui.shadcn.com/), an opinionated tailwind theme and radix-ui component generator. Shadcn isn't a direct dependency but has a CLI tool to generate components into this repo based on `components.json`.

### Development

```bash
npm run storybook # Run storybook application to view components.
npm run build-storybook # Build storybook application as static HTML.
npm run build # Build component library with rollup.
``` 

### Design Tokens
CSS variables are declared in `src/tokens.css`. Dark mode is enabled by the presence of the attribute `data-theme="dark"` higher up in the tree.






