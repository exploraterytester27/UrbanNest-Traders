# UrbanNest-Traders development instructions

## Project purpose

UrbanNest-Traders is a fictional prototype for a professional website-development business. The V1 site is a polished small-business product catalogue and enquiry website, designed to be a reusable foundation for future independent client websites.

## Planned stack

- Next.js with TypeScript and the App Router
- Tailwind CSS
- shadcn/ui
- Playwright for end-to-end testing
- Vercel-compatible deployment
- Cloudflare-compatible DNS

Do not scaffold, install, or configure the stack until that work is explicitly requested.

## V1 boundaries

Do not introduce the following in V1:

- A database
- Authentication or user accounts
- E-commerce functionality
- Shopping carts
- Payments
- A CMS
- AWS services
- Docker
- Multi-tenant architecture
- Dependencies that are not clearly needed

Use local, version-controlled structured data for products and site content. Keep that data separate from UI components so the catalogue can later be adapted for another independent client site.

## Architecture

- Build a single-client, single-site application; do not add tenant concepts, tenant routing, or tenant configuration layers.
- Prefer small, composable components and clear feature boundaries.
- Keep product data, types, and content models in dedicated modules rather than embedding data in page components.
- Use static generation and server components by default. Use client components only for genuine browser interactivity.
- Treat the enquiry flow as lead capture/contact, never as a checkout flow.
- Keep configuration deployment-portable for Vercel and DNS-portable for Cloudflare.
- Avoid abstractions and packages until they solve a demonstrated project need.

## Design system

Use these approved tokens consistently. Do not introduce competing brand colours without approval.

| Token | Value | Usage |
| --- | --- | --- |
| Background | `#FAF7F2` | Page background |
| Surface | `#FFFFFF` | Cards and elevated surfaces |
| Border | `#F1EBE1` | Borders and dividers |
| Primary | `#C1532A` | Primary actions and emphasis |
| Primary Hover | `#A3421F` | Primary-action hover state |
| Secondary / Pine | `#2F4B45` | Secondary actions and accents |
| Text | `#292420` | Main text |
| Muted | `#6B6259` | Supporting text |
| Success | `#3F7A54` | Success feedback |
| Error | `#B3261E` | Error feedback |
| WhatsApp | `#25D366` | WhatsApp actions only |

- Use Fraunces for headings.
- Use Inter for body copy and interface text.
- Maintain a warm, restrained, professional visual tone with generous whitespace and accessible contrast.
- Reserve WhatsApp green exclusively for links or buttons that launch a WhatsApp action.

## Quality expectations

- Maintain strict TypeScript quality; avoid `any` unless an external boundary makes it unavoidable.
- Ensure semantic HTML, keyboard access, visible focus states, and sensible responsive behaviour.
- Use Tailwind utilities and shadcn/ui primitives consistently once the application exists.
- Add Playwright coverage for key visitor journeys when those journeys are implemented.
- Do not commit secrets; document required environment variables in an example file when they become necessary.
- Before completing a code change, run relevant linting, type checks, tests, and production build checks where available.

## Working conventions

- Inspect the existing project before making changes and preserve user-authored work.
- Make focused, minimal changes that directly support the requested task.
- Explain any new dependency and install it only when it is necessary and approved by the task scope.
- Keep this file current when project-level architectural or delivery decisions change.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
