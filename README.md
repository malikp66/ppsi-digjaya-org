This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Redis Caching

Remote asset requests (e.g. external images) can now be routed through `/api/cache-image`, which stores the payload in Redis and serves subsequent requests from the cache. Review `.env.example` and copy it to `.env.local`, then fill in your Redis credentials and desired cache rules.

- Set connection details either via `REDIS_URL` or `REDIS_HOST`/`REDIS_PORT`, along with optional authentication.
- Toggle the proxy behaviour on the client with `NEXT_PUBLIC_ENABLE_IMAGE_CACHE`, and optionally restrict allowed upstream hosts in `NEXT_PUBLIC_IMAGE_CACHE_ALLOW_HOSTS`.
- Adjust `REDIS_IMAGE_*` variables to control TTL, maximum payload size, and request timeout.

After configuring the environment variables, restart the dev server so that the new values are picked up.
