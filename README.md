# Executive Command Centre

Next.js app for executive IT interview prep: knowledge hub, STAR vault, interview bank, mock interviews, company mode, and final prep. Content is static-first; access uses an HttpOnly session cookie signed with a server secret.

## Requirements

- Node.js 20+
- npm (or your preferred package manager)

## Local development

1. Copy environment template and add **your own** values (never commit `.env.local`):

   ```bash
   cp .env.example .env.local
   ```

   Set **`AUTH_SECRET`** (at least 32 characters), **`AUTH_USERNAME`**, and **`AUTH_PASSWORD`**. Example for `AUTH_SECRET`: `openssl rand -base64 32`.

2. Install and run:

   ```bash
   npm install
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000). You will be redirected to `/login` until the three variables above are set.

There are **no default passwords or signing keys in the repository**. If sign-in variables are missing, the app shows a configuration message instead of using hidden defaults.

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `AUTH_SECRET` | Yes | At least 32 characters; signs the session JWT. |
| `AUTH_USERNAME` | Yes | Allowed username for `/login`. |
| `AUTH_PASSWORD` | Yes | Password for that user. |

On [Vercel](https://vercel.com), add these under **Project → Settings → Environment Variables** for Production (and Preview if needed), then redeploy.

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Run production server locally |
| `npm run lint` | ESLint |

## Deploy to Vercel

1. Push this project to GitHub (see repository root note below).
2. In Vercel, **Import** the repo and use the **Next.js** preset.
3. If the app lives inside a subfolder (for example `interview-os`), set **Root Directory** to that folder in the Vercel project settings.
4. Configure `AUTH_SECRET`, `AUTH_USERNAME`, and `AUTH_PASSWORD`, then deploy.
5. `vercel.json` adds basic security headers.

## Push to GitHub (example)

This workspace may use `interview-os` as the app folder. From the folder that contains `package.json`:

```bash
git init
git add .
git status   # confirm no .env or .env.local appears
git commit -m "Initial commit: Executive Command Centre"
git branch -M main
git remote add origin https://github.com/FRIEZEWANDABWA/jobrehersal.git
git push -u origin main
```

If your remote is empty ([jobrehersal](https://github.com/FRIEZEWANDABWA/jobrehersal)), the first push creates the default branch.

## Deploy checklist

- [ ] `git status` shows **no** `.env`, `.env.local`, `.pem`, or `.vercel` auth files staged (`.gitignore` should exclude them).
- [ ] Production secrets exist **only** in the host (Vercel env, or your private machine’s `.env.local`).
- [ ] Run `npm run build` locally before pushing.
- [ ] Optional: Vercel **Deployment Protection** for an extra access gate.

## Editing content

Structured data lives under `content/` (JSON and Markdown). UI copy lives in `components/` and `app/`. See comments in `lib/contentData.ts` for what is imported where.

## Security reminder

Use a strong unique password and rotate it if the repo was ever public with old env-based defaults. For multi-user or compliance needs, replace cookie auth with an identity provider (Auth0, Clerk, Microsoft Entra, etc.).
