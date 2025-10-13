# @quantinuum/quantinuum-ui
Quantinuum design tokens and React components.

Based on [shadcn](https://ui.shadcn.com/), an opinionated tailwind theme and radix-ui component generator. Shadcn components have been generated into this repo using the `components.json` definition and re-exported as a new library.

### Development

#### Basic commands

Clone repository
```bash
git clone git@github.com:CQCL/quantinuum-ui.git
```

Install dependencies and run storybook web server locally
```bash
npm i
npm run storybook # Run storybook application to view components.
```

Build storybook and UI library.
```bash
npm run build-storybook # Build storybook application as static HTML.
npm run build # Build component library with rollup.
```


### Design Tokens
CSS variables are declared in `src/tokens.css`. Dark mode is enabled when adding the attribute `data-theme="dark"` higher up in the tree.






