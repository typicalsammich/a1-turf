# A1 Turf & Hardscape — website handoff

## Website
Private deployed Site: https://a1-turf-hardscape-colorado.typical-sammich.chatgpt.site
The existing a1turfandhardscape.com domain was not modified.

## Included
19 public-content routes, plus a custom 404 and restricted owner inbox. Seven individually written service pages. Cinematic entrance using the existing enhanced MP4; sound/skip/replay controls; mobile crop; reduced-motion and loading fallbacks. Scroll-controlled illustrative film, real-photo editorial gallery with filtering, keyboard and swipe lightbox, detail captions, thumbnails, progress/completion comparison (different viewpoints explicitly labeled), detail spotlight, interactive Leaflet/OpenStreetMap Colorado map with Denver pin, pan/zoom and search.

All 32 supplied real-work photos are in public/media/projects.json, with descriptive filenames, native-resolution WebP and small thumbnails. The 150px logo was made transparent by edge-connected background removal, preserving white lettering. A higher-resolution original logo and project originals would improve larger displays.

## Estimate system
The ten-step planner saves actual requests to Cloudflare D1 and optional photos to private R2 storage. It includes server validation, same-origin checks, single-use form tokens, honeypot, a five-per-hour network-identifier limit, image signature/type/size limits, idempotent retry and recoverable UI errors. Three photos maximum, 5 MB each. No public photo endpoints.

The owner’s authenticated Site email is configured as a secret LEADS_ADMIN_EMAIL runtime variable. Visit /project-inbox/ while signed in with the Site owner account to read inquiries, download a JSON export and view private photos. Other signed-in viewers cannot access it. The local development QA record is not part of deployment.

No email or CRM notification integration is connected. Saved inquiries must currently be reviewed in the inbox. A business notification destination and provider credentials are needed to add alerts. This is the remaining operational integration, not a simulated form success.

## Content decisions
Phone: (303) 874-8895. User-supplied hours: Monday–Saturday 6 AM–8 PM Mountain time, Sunday closed.
Only Denver is published as a confirmed city presence. Other addresses can inquire without a coverage promise. The interactive geographical map uses Leaflet and OpenStreetMap tiles, with visible attribution. No fake office pin or statewide coverage polygon.
Pavers, turf/greens, retaining walls, concrete, decorative rock and redesign services are supported by the existing website. Heated driveways has a complete planning page with a conspicuous availability-confirmation notice; no heating installation is claimed in driveway photos.
Existing advertised starting packages preserved: 15×15 paver patio $6,449; backyard putting green $4,449; Belgard retaining walls $5,449. Current terms and availability must be confirmed. No expiry or full package terms were published. Older expired Nextdoor discounts were omitted. No reviews were republished because the profile contains inconsistent business attribution. No invented history, credentials, warranties, awards or project locations.

The cinematic is AI-generated design imagery and is explicitly labeled. Real work is presented separately. The pool-side progress/completion images appear to depict the same layout but have different camera positions; the slider discloses this and is not an aligned construction comparison.

## Verified sources
- https://www.a1turfandhardscape.com/ — retrieved directly October 27, 2026; core services, Belgard options, package starting prices. Its /special-offers/, /robots.txt and /sitemap.xml paths returned the same homepage rather than unique resources.
- https://nextdoor.com/pages/lawn-guru-bros-denver-co/ — Denver profile, phone, described services; old discounts omitted. User’s updated Sunday closure takes precedence over the profile.
- https://www.instagram.com/a1.turf.hardscape.llc/ — accessible only as a login/client-rendered shell; no unsupported facts extracted.
- User’s photographs, logo, brief, phone and hours.

## Editing & deployment
Vinext / React / TypeScript. Maintain business and service text in content/site.ts. Photo metadata: public/media/projects.json. Components: app/ui.tsx and app/estimate.tsx. Server pages: app/[[...slug]]/page.tsx. Estimate API: app/api/estimates/route.ts. Owner inbox: app/project-inbox/page.tsx.

Run npm run dev for local preview and npm run build for standalone production build. Hosted changes use the Sites skill helpers to sync exact source, package and publish. .openai/hosting.json retains the Site ID and DB/BUCKET bindings. Never put credentials in source. Migrations are in drizzle/ and are applied to hosted storage during publication.

Before moving to a custom domain, update the origin in content/site.ts and review canonical URLs, social metadata, sitemap and existing redirects. Public access is a separate owner decision; this delivery retains the new Site’s default private audience.

## Verification
TypeScript check and production build pass. Local HTTP checks cover all content routes, custom 404, sitemap and robots, referenced internal links and media. Actual request/photo save, idempotent retry, foreign-origin rejection and restricted lead access tested. Narrow-screen visual review covered homepage, service headline, gallery, lightbox and mobile menu. Desktop layout uses responsive CSS but a separate wide-viewport browser capture was not available. No measured Lighthouse/Core Web Vitals score or formal WCAG conformance audit is claimed.

## Business confirmation list
Current heated-driveway availability; exact service boundaries beyond Denver; current package terms/prices; business email or notification destination; any approved reviews, warranties or credentials. No additional city pages should be published until coverage is confirmed. Proposed unconfirmed cities from the brief remain unpublished: Aurora, Lakewood, Arvada, Westminster, Thornton, Centennial, Littleton, Englewood, Wheat Ridge, Commerce City, Northglenn, Federal Heights, Greenwood Village, Cherry Hills Village, Highlands Ranch, Lone Tree, Parker, Castle Rock, Castle Pines, Boulder, Broomfield, Louisville, Lafayette, Superior, Erie, Longmont, Fort Collins, Loveland, Windsor, Greeley, Golden, Morrison, Evergreen, Conifer, Colorado Springs, Monument and Fountain.

## October 27 revision
Gallery photographs now use warm postcard frames, edition numbers and subtle stamped details. Sorting and fullscreen controls are preserved. The scroll transformation uses 120 extracted WebP frames from the existing supplied footage, with extra scroll distance devoted to the installation wave; it does not rely on video seeking. Phase buttons and a keyboard-accessible scrubber support direct exploration. The map is now a real pan/zoom Leaflet map with OpenStreetMap geography, city/road labels, visible attribution and a Denver marker.
