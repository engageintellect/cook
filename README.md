# cook

## Description:

An ultra-modern, bento-box styled portfolio landing page for developers, designers, and other creatives.

## TO-DO:

**NOTE:** If you would like to contribute, please check out the issues tab for a list of tasks that need to be completed.

- [ ] Improve lighthouse performance score by optimizing hero header image and minifying unused code.
- [ ] Add a Pocketbase schema
- [ ] Add Pocketbase configuration instructions
- [ ] Add a footer?

## Current Lighthouse Scores:

If you would like to help improve the performance, accessibility, best practices, and SEO of this project, please check out the issues tab for a list of tasks that need to be completed.

| Metric         | Score |
| -------------- | ----- |
| Performance    | 98%   |
| Accessibility  | 100%  |
| Best Practices | 100%  |
| SEO            | 100%  |

## Technologies:

| Name                                                | Description                                                                           |
| --------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [next.js](https://nextjs.org/)                      | React framework                                                                       |
| [magic-ui](https://magicui.design)                  | A modern, minimalistic UI library                                                     |
| [shadcn/ui](https://ui.shadcn.com/)                 | A modern, minimalistic UI library                                                     |
| [tailwind css](https://tailwindcss.com)             | A utility-first CSS framework                                                         |
| [zod](https://zod.dev)                              | TypeScript-first schema declaration and validation                                    |
| [pocketbase](https://pocketbase.io)                 | A modern, minimalistic database                                                       |
| [react-hook-form](https://www.react-hook-form.com/) | Performant, flexible and extensible forms with easy-to-use validation                 |
| [vercel](https://vercel.com)                        | Deploy web projects with ease                                                         |
| [umami analytics](https://umami.is/)                | A simple, fast, and privacy-focused website analytics alternative to Google Analytics |

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

## Pocketbase Setup

First, we need to install Pocketbase. You can download the latest release from the [Pocketbase GitHub releases page](https://github.com/pocketbase/pocketbase/releases)

```bash
wget https://github.com/pocketbase/pocketbase/releases/download/v0.8.0/pocketbase_0.8.0_linux_amd64.zip
unzip pocketbase_0.8.0_linux_amd64.zip
```

```bash
chmod +x pocketbase
```

```bash
./pocketbase serve
```

## Client Setup

```bash
git clone https://github.com/engageintellect/cook.git
cd cook
```

Now, let's set our environment variables. Copy `/.env.example` to either `.env` (for prod) or `.env.local` (for dev) in the root of the project and add replace the values with your own.:

Finally, we can install the dependencies and start the development server:

````bash

```bash
pnpm i && pnpm run dev
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
