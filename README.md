# Trattoria Bella

A modern one-page restaurant website built with React, TanStack Start, and Tailwind CSS. This project is designed for a Tunisian pizzeria offering wood-fired pizzas, WhatsApp ordering, and a fast mobile-friendly experience.

## What changed

- Added mobile navigation with a responsive menu overlay.
- Polished the homepage with featured pizzas, service highlights, and customer testimonials.
- Improved accessibility, smooth scrolling, and call-to-action links for WhatsApp ordering.
- Added a Cloudflare deploy script for easy publishing.

## Development

You need Node.js and npm installed.

```sh
git clone <this-repository-url>
cd <repository-name>
npm install
npm run dev
```

## Build

```sh
npm run build
```

## Preview production build locally

```sh
npm run preview:prod
```

## Publish to Cloudflare

The project is ready to deploy with Nitro and Cloudflare.

For GitHub Actions deployment, add these repository secrets:

- `token` — your Cloudflare API token
- `id` — your Cloudflare account ID

The workflow maps these to the environment variables required by Cloudflare.

For local deployment, set the required environment variables and run:

```sh
set CLOUDFLARE_API_TOKEN=your_token
set CF_ACCOUNT_ID=your_account_id
npm run deploy:cloudflare
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
