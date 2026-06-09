# Abdullah Anis — Portfolio

Futuristic sci-fi portfolio site built from CV data with Three.js 3D animations, Framer Motion, and full SEO optimization.

## Stack

- **Next.js 15** (App Router)
- **Three.js / React Three Fiber** — animated 3D hero (particles, wireframe icosahedron, grid)
- **Framer Motion** — scroll and hover animations
- **Tailwind CSS v4** — dark cyberpunk theme
- **SEO** — metadata, Open Graph, Twitter cards, JSON-LD, sitemap, robots.txt, manifest

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Log in to Vercel (one-time):

   ```bash
   npx vercel login
   ```

2. Deploy to production:

   ```bash
   npx vercel --prod
   ```

   Or import this repo at [vercel.com/new](https://vercel.com/new) and connect GitHub.

3. After deploy, set your canonical URL in Vercel project settings:

   - Environment variable: `NEXT_PUBLIC_SITE_URL` = `https://your-domain.vercel.app`

4. Optional: add a custom domain in the Vercel dashboard.

## Customize content

Edit `src/data/portfolio.ts` to update experience, projects, skills, and contact details.

## Build

```bash
npm run build
npm start
```
