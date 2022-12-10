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
