# A1 Turf & Hardscape

A native Next.js website for deployment from GitHub to Vercel. The website source lives once at the repository root; all project media is under public/media.

## Run locally
Use Node 22 or newer. Run npm ci, npm run dev, or npm run build followed by npm start.

## Automatic Vercel deployment
This repository is already connected to the Vercel a1-turf project. A push to main triggers deployment. vercel.json sets the native Next.js framework, npm ci install and npm run build. The project root is the repository root. No .openai/hosting.json, Vite, Vinext or Cloudflare Worker runtime is required. If the Vercel dashboard has an old output-directory override, clear it so .next is used.

## Inquiry storage
The existing private ChatGPT Site has a separate database; it is not transferred to Vercel. To enable online inquiries here, connect Redis through Vercel Marketplace and set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN (KV_REST_API_URL / KV_REST_API_TOKEN also work). Set a random FORM_SECRET of at least 32 characters and ADMIN_PASSWORD of at least 16 characters in Vercel, then redeploy. No secrets belong in GitHub.

For optional project photos, connect a PRIVATE Vercel Blob store; it supplies BLOB_READ_WRITE_TOKEN. Photos are limited to three images, 1 MB each, keeping multipart requests below Vercel’s function payload limit. The server checks signatures as well as size.

Visit /admin-login/ and sign in with the configured administrator password to view /project-inbox/. Stored inquiries and photo downloads require a signed, HttpOnly administrator cookie. OpenAI identity headers are not trusted on this public Vercel deployment.

Without storage configuration, the planner explicitly shows a call/text alternative and does not simulate submission success. Email alerts are not connected.

## Editing
- content/site.ts: services and business information
- content/projects.json: gallery photo metadata
- app/ui.tsx: shared interface
- app/area-map.tsx: real Leaflet/OpenStreetMap map
- app/scroll-transformation.tsx: scroll-controlled paving frames
- app/[[...slug]]/page.tsx: full website pages
- public/media/paving-sequence/: 120 frames used by the transformation

The original Sites deployment is maintained separately and was not changed by this GitHub migration.
