# Next.js Site

This is a good starting point for a [Next.js](https://nextjs.org/) website, having been bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), but extras added such as centralised components and some dummy fixtures ready to be replaced with data from an API.

## Installation

Assuming you have node installed on your machine, you can install everything else by running...

```bash
npm i
```

## Running the site locally

To spin up a copy of the site locally, run...

```bash
npm run dev
```

...and view at [http://localhost:3000](http://localhost:3000) in your browser.

## Running Storybook

To see the components in isolation within Storybook, run...

```bash
npm run storybook
```

...and view at [http://localhost:6006](http://localhost:6006) in your browser.

## Editing Pages & Components

You can start editing pages by modifying the files within `pages/...`, or edit components within `components/...`. The page in your browser (site and/or Storybook) will auto-updates as you edit the files.

## Fixtures

Until data is set up to be imported from APIs, you can find statically stored data within json files inside of the `fixtures` folder.

## Base

This was first bootstrapped with \`npx create-next-app\`, but
has extra bits added.

## Extras

- **Centralised components & linked CSS + stories**\
  _These are separated from the pages so they can be used across multiple pages._
- **Fixtures**\
  _So hardcoded data can be used until it can be swapped out with data from an API._
- **Base content**\
  _A few standard pages that most sites need._
  - Homepage
  - About page
  - Team page
  - Contact page
- **[Storybook](https://storybook.js.org/)**
  - Install Storybook for NextJS *(As described in [this Storybook blog article](https://storybook.js.org/blog/get-started-with-storybook-and-next-js/))*
  - Stories moved to be stored alongside each component & sorted into levels based on atomic design principles
  - Fix so Next Image will work inside of Storybook *(As described in [this Storybook blog article](https://storybook.js.org/blog/get-started-with-storybook-and-next-js/))*
  - [A11y accessibility addon](https://storybook.js.org/addons/@storybook/addon-a11y/)
- **[CLSX](https://www.npmjs.com/package/clsx)**\
  _A useful tool for combining class names in the \`className\ prop._
- **CSS Restructure**
  - Component-specific styles stored alongside each component using CSS Modules
  - Global styles stored centrally
    - variables.css
    - global.css
    - typography.css
- **Start Optimising**
  - _Add lang attribute to html element_
  - _Add default robots.txt_
- **Add [Plop](https://plopjs.com/) with Component Creator script**\
  _Means you can run \`plop\` to create the starting point for a new component._
- **Content Block Structure**
  - **Hero Block**\
    _A commonly used block used across all pages_
  - **Markdown Block**\
    _A commonly used block type used throughout sites for basic content. I've used [react-markdown](https://www.npmjs.com/package/react-markdown) for the rendering._
  - ...

## Next Up

These haven't been added yet, but

- **More Content Blocks**
- **Import About page content from README.md file**
- **Link Component**\
  _Make custom \`Link\` component so \`target='blank'\` gets handled programatically._
- **Expand on 'People'** including...
  - Using [Avataar](https://getavataaars.com/)
  - Having a page per person
- **Projects**\
  _Often useful for company & portfolio sites._
- **Tags**\
  _So you can tag projects and team members with tags such as the type of work, skills or department etc._

## Not Included

These have been purposefully left out.

- **Component Library such as [MUI](https://mui.com/)**\
  _This site is currently too simple to need MUI. If it needs a couple of extra components they can be custom made.\
  I'm trying not to add stuff to this boilerplate if it's not needed._`,

---

## APIs

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
