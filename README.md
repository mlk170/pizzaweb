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

The project is ready to deploy with Nitro and Cloudflare. Before deploying, set the following environment variables:

- `token` — a token created in your Cloudflare dashboard with permissions to deploy Workers.
- `id` — your Cloudflare account ID.

For local deployment:

```sh
set token=your_token
set id=your_account_id
npm run deploy:cloudflare
```

For GitHub Actions deployment, add `token` and `id` as repository secrets.

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
