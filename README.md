# Welcome to Horizon!

This is a free photography theme for Astro created by [Cosmic Themes](https://cosmicthemes.com/).

[website demo](https://horizon.cosmicthemes.com/)

## Quickstart

1. Fork this project to your own repository, and clone it to your local machine
2. Install all necessary packages with `npm install`
3. Run `npm run dev` to start the dev server
4. Now you can setup the site to your liking!
   - [Style customization](https://cosmicthemes.com/docs/styles/)
   - [Content editing](https://cosmicthemes.com/docs/content/)
   - [Forms](https://cosmicthemes.com/docs/contact-form/)
5. Update the site URL in `astro.config.mjs` and `/public/robots.txt` to match your domain
6. After you're happy, update your changes to your repo and deploy to Vercel

## Code Intro

The source files have the following setup. Note that not all files are listed here.

```
.
├── .tours/
│   └── code-intro.tour
├── public/
│   ├── favicons/
│   │   └── favicon.ico
│   ├── images/
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── site-logo.png
│   ├── components/
│   │   └── Hero/
│   │       └── Hero.astro
│   ├── config/
│   │   └── navData.json.ts
│   ├── data/
│   │   ├── portfolios/
│   │   ├── testimonials/
│   │   └──otherPages/
│   │    config.ts
│   ├── js/
│   │   └── textUtils.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── portfolio/
│   │   │   ├── [...slug].astro
│   │   │   └── index.astro
│   │   ├── [page].astro
│   │   ├── 404.astro
│   │   └── index.astro
│   ├── styles/
│   │   └── global.css
│   └── content.config.ts
├── .gitignore
├── .prettierrc.mjs
├── astro.config.mjs
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```

For robots like Google to see the correct sitemap, you will want to edit the `public/robots.txt` file to use your website domain.

## Other Resources

- See my blog post on [recommended Astro web development setup](https://cosmicthemes.com/blog/astro-web-development-setup/).
- You can learn more information from the [theme docs](https://cosmicthemes.com/docs/) page on the [Cosmic Themes Website](https://cosmicthemes.com/).

## License

This project is open source and available under the [GPL-3.0 License](https://www.gnu.org/licenses/gpl-3.0.en.html).

However, If you have purchased [All Access](https://cosmicthemes.com/all-access/) from Cosmic Themes, there is a no attribution required license you can view at [License details](https://cosmicthemes.com/license/).

## General Astro Info

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory. I also frequently use `src/assets` for images when using Astro asssets for image optimization.

### Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### Want to learn more?

Feel free to check out the [Astro documentation](https://docs.astro.build).
