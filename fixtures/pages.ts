import { people } from "./people"

export const pages = [
  {
    id: 1,
    metadata: {
      description: "Using React/Typescript",
      title: "Welcome to this NextJS Website",
    },
    shortDescription: "Using React/Typescript",
    shortTitle: "Home",
    url: "/",
    contentBlocks: [
      {
        type: "hero",
        title: "Welcome to this NextJS Website",
        subtitle: "Using React/Typescript",
      },
      {
        type: "pageList",
      },
    ],
  },
  {
    id: 2,
    metadata: {
      description: "Find out more about our organisation.",
      title: "About us",
    },
    shortDescription: "Find out more about our organisation.",
    shortTitle: "About",
    url: "/about",
    contentBlocks: [
      {
        type: "hero",
        title: "About us",
        subtitle: "Find out more about our organisation.",
      },
      {
        type: "markdown",
        content: `## Base

This was first bootstrapped with \`npx create-next-app\`, but
has extra bits added.

## Extras

-   **Centralised components & linked CSS + stories**\
    *These are separated from the pages so they can be used across multiple pages.*
-   **Fixtures**\
    *So hardcoded data can be used until it can be swapped out with data from an API.*
-   **Base content**\
    *A few standard pages that most sites need.*
    -   Homepage
    -   About page
    -   Team page
    -   Contact page
-   **[Storybook](https://storybook.js.org/)**
    -   Install Storybook for NextJS *(As described in [this Storybook blog article](https://storybook.js.org/blog/get-started-with-storybook-and-next-js/))*
    -   Stories moved to be stored alongside each component & sorted into levels based on atomic design principles
    -   Fix so Next Image will work inside of Storybook *(As described in [this Storybook blog article](https://storybook.js.org/blog/get-started-with-storybook-and-next-js/))*
    -   [A11y accessibility addon](https://storybook.js.org/addons/@storybook/addon-a11y/)
-   **[CLSX](https://www.npmjs.com/package/clsx)**\
    *A useful tool for combining class names in the \`className\ prop.*
-   **CSS Restructure**
    -   Component-specific styles stored alongside each component using CSS Modules
    -   Global styles stored centrally
        -   variables.css
        -   global.css
        -   typography.css
-   **Start Optimising**
    -   *Add lang attribute to html element*
    -   *Add default robots.txt*
-   **Add [Plop](https://plopjs.com/) with Component Creator script**\
    *Means you can run \`plop\` to create the starting point for a new component.*
-   **Content Block Structure**
-   **Hero Block**\
    _A commonly used block used across all pages_
-   **Markdown Block**\
    _A commonly used block type used throughout sites for basic content. I've used [react-markdown](https://www.npmjs.com/package/react-markdown) for the rendering._
-   ...

Next Up
-------

These haven't been added yet, but

-   **More Content Blocks**
-   **Import About page content from README.md file**
-   **Link Component**\
    *Make custom \`Link\` component so \`target='blank'\` gets handled programatically.*
-   **Expand on 'People'** including...
    -   Using [Avataar](https://getavataaars.com/)
    -   Having a page per person
-   **Projects**\
    *Often useful for company & portfolio sites.*
-   **Tags**\
    *So you can tag projects and team members with tags such as the type of work, skills or department etc.*

Not Included
------------

These have been purposefully left out.

-   **Component Library such as [MUI](https://mui.com/)**\
    *This site is currently too simple to need MUI. If it needs a couple of extra components they can be custom made.\
    I'm trying not to add stuff to this boilerplate if it's not needed.*`,
      },
    ],
  },
  {
    id: 3,
    metadata: {
      description: "Some of the fantastic team who make our organisation work.",
      title: "Our Team",
    },
    shortDescription:
      "Some of the fantastic team who make our organisation work.",
    shortTitle: "Team",
    url: "/team",
    contentBlocks: [
      {
        type: "hero",
        title: "Our Team",
        subtitle: "Some of the fantastic team who make our organisation work.",
      },
      { type: "people", people: people },
    ],
  },
  {
    id: 4,
    metadata: {
      description: "Get in touch.",
      title: "Contact us",
    },
    shortDescription: "Get in touch.",
    shortTitle: "Contact",
    url: "/contact",
    contentBlocks: [
      {
        type: "hero",
        title: "Contact us",
        subtitle: "Get in touch.",
      },
      { type: "markdown", content: "Form goes here" },
    ],
  },
]
