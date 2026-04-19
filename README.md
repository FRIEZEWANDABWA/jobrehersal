# Executive Command Centre

Next.js app for executive IT interview prep: knowledge hub, STAR vault, interview bank, mock interviews, company mode, and final prep. Content is static-first. **Authentication is currently disabled** so you can open every route locally and on Vercel without signing in.

## Requirements

- Node.js 20+
- npm (or your preferred package manager)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Run production server locally |
| `npm run lint` | ESLint |

## Deploy to Vercel

1. Push this project to GitHub.
2. In [Vercel](https://vercel.com), **Import** the repo and use the **Next.js** preset.
3. If the app lives inside a subfolder (for example `interview-os`), set **Root Directory** in project **Settings → General**.
4. Deploy. No auth-related environment variables are required right now.
5. `vercel.json` adds basic security headers.

## Push to GitHub (example)

From the folder that contains `package.json`:

```bash
git add .
git status   # confirm no secrets staged
git commit -m "Your message"
git push
```

Example remote: [https://github.com/FRIEZEWANDABWA/jobrehersal](https://github.com/FRIEZEWANDABWA/jobrehersal).

## Editing content

Structured data lives under `content/` (JSON and Markdown). UI copy lives in `components/` and `app/`. See `lib/contentData.ts` for main imports.

## Security note

With login off, anyone who can open your deployment URL can use the app. Turn auth back on (or use Vercel Deployment Protection) before sharing sensitive material publicly.
