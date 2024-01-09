# quantinuum-ui
Quantinuum design tokens and React components.

Based on [shadcn](https://ui.shadcn.com/), an opinionated tailwind theme and radix-ui component generator. Shadcn isn't a direct dependency but has a CLI tool to generate components into this repo based on `components.json`.

### Development

```bash
npm run dev # Run storybook application to view components.
npm run build-storybook # Build storybook application as static HTML.
npm run build # Build component library with rollup.
``` 

### Design Tokens
CSS variables are declared in `src/tokens.css`. Dark mode is toggled by the presence of the class `.theme-mode-dark` on the root document element (`<html />`).






