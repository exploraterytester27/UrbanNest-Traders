# UrbanNest Traders Design System

This document is the visual and content-direction source of truth for the current UrbanNest Traders prototype. It describes the design that exists in the codebase today and sets boundaries for future work. It is inspired by the idea of a design brief that can guide both human contributors and future AI-managed website modules; it is not copied from another company or design system.

## 1. Design principles

### Overall visual personality

UrbanNest is warm, restrained, editorial, and approachable. The current interface uses generous whitespace, soft cream surfaces, pine-green contrast, terracotta emphasis, rounded cards, and serif display typography to make everyday products feel considered without becoming ornate.

### Brand impression

The intended impression is thoughtful, dependable, and quietly premium. The site should feel suitable for personal gifting, everyday goods, and business enquiries without making claims about quality, provenance, certifications, pricing, or availability that are not present in the approved content data.

### Simplicity and readability

- Keep each section focused on one message and one clear next action.
- Prefer short paragraphs, descriptive labels, and direct link text.
- Use whitespace and hierarchy to separate ideas before adding visual effects.
- Keep catalogue content in `data/` and business/site content in `config/`; do not duplicate it inside presentation components.

### Trust and professionalism

- Use calm layouts, consistent spacing, accessible contrast, and predictable interactions.
- Present the catalogue as a starting point for enquiries, not as an e-commerce checkout.
- Keep placeholder business details visibly unconfirmed until verified information is supplied.
- Do not invent testimonials, company history, product claims, prices, addresses, certifications, or fulfilment promises.

### Visual hierarchy

The current hierarchy is:

1. One strong page or section heading in Fraunces.
2. A concise supporting paragraph in Inter.
3. One primary action, with a secondary action only when it helps the visitor choose a path.
4. Supporting catalogue cards, metadata, and links.

Eyebrows use uppercase Inter with wide tracking and the primary terracotta color. Headings use sentence case, a tight line-height, and a gentle negative letter-spacing.

## 2. Color system

These tokens are defined in `app/globals.css` and approved in `AGENTS.md`. Use the Tailwind semantic names rather than repeating hex values in components whenever a token exists.

| Token | Hex value | Current use |
| --- | --- | --- |
| `background` | `#FAF7F2` | Page background, soft image fallback surfaces, light sections |
| `surface` | `#FFFFFF` | Cards, contact panels, elevated surfaces, light button text |
| `border` | `#F1EBE1` | Dividers, card borders, header/footer separators |
| `primary` | `#C1532A` | Primary actions, eyebrows, emphasis, focus outlines |
| `primary-hover` | `#A3421F` | Hover state for primary actions |
| `pine` | `#2F4B45` | Dark sections, secondary actions, headings, footer |
| `text` | `#292420` | Main text and default headings |
| `muted` | `#6B6259` | Supporting copy, metadata, labels, descriptions |
| `success` | `#3F7A54` | Reserved for future success feedback |
| `error` | `#B3261E` | Reserved for future error feedback |
| `whatsapp` | `#25D366` | WhatsApp actions only; do not use as a general accent |

The current homepage also contains three local, component-level accent colors:

- `#D8C7B6` for subtle about-section rules.
- `#EADFD2` for the corporate enquiry panel.
- `#E6B08F` for restrained hero/value-section highlight text.

These are part of the current visual implementation but are not named global tokens. Future cleanup may consolidate them into approved semantic tokens after explicit design approval. Do not introduce additional arbitrary colors.

### Color and CTA rules

- Use terracotta for the primary action in a given section.
- Use pine for secondary actions, dark panels, and high-contrast accents.
- Use white/surface text on primary or pine buttons.
- Use WhatsApp green only when an action actually launches WhatsApp.
- Do not use success or error colors for decoration.

## 3. Typography

### Families

- **Headings:** Fraunces, loaded through `next/font/google` and exposed as `--font-fraunces` / `font-heading`.
- **Body and interface:** Inter, loaded through `next/font/google` and exposed as `--font-inter` / `font-sans`.

The global stylesheet applies Fraunces to `h1`–`h6` with weight `600`, `letter-spacing: -0.02em`, and `line-height: 1.1`. Body text uses Inter with a base line-height of `1.5`.

### Current sizing conventions

These are approximate Tailwind size patterns used in the current homepage:

- Hero heading: `text-5xl`, `sm:text-6xl`, `lg:text-7xl`.
- Section headings: `text-3xl`, `sm:text-4xl`, `lg:text-5xl`.
- CTA/panel headings: commonly `text-4xl`, `sm:text-5xl`.
- Card headings: commonly `text-2xl`.
- Supporting body copy: `text-base` to `text-lg`, usually `leading-7` or `leading-8`.
- Interface and metadata: `text-sm`.
- Eyebrows and labels: `text-sm` or `text-xs`, semibold, uppercase, and tracked.

Use the smallest size that remains comfortably readable at the target breakpoint. Do not use display typography for long paragraphs or small controls.

## 4. Spacing and layout

### Containers

- Main sections use a centered `max-w-7xl` container.
- Horizontal padding is `px-5` on mobile, `sm:px-8` on tablet, and `lg:px-10` on desktop.
- Header and footer follow the same container convention.

### Section spacing

Most homepage sections use:

- `py-20` on mobile.
- `sm:py-24` on tablet.
- `lg:py-28` on desktop.

The hero starts slightly tighter at `py-16`, then uses `sm:py-20` and `lg:py-28`. The quote CTA uses a slightly shorter desktop rhythm at `lg:py-24`.

### Grids and cards

- Use CSS grid with small gaps on mobile and progressively wider gaps at larger breakpoints.
- Category cards are one column on mobile, two columns from `sm`, and three columns from `lg`.
- Featured product cards are one column on mobile, two from `sm`, and four from `lg`.
- Text/image split sections use a single column below desktop and asymmetric grids at `lg`.
- Cards commonly use `rounded-2xl`, a `border border-border`, a surface/background fill, and internal padding.
- The large hero and CTA panels use a softer `rounded-[2rem]` treatment.

### Content stacking

Mobile layouts stack content vertically. At `sm`, paired content may become two columns. At `lg`, major sections can use asymmetric two-column grids, navigation becomes horizontal, and featured product grids expand to four columns.

## 5. Component design

Homepage sections are independent modules under `components/home/` and are composed by `app/page.tsx`. Each module should retain its own semantic landmark, heading, content mapping, and responsive rules.

### Header

- Uses a cream background with a bottom border.
- Centers content in `max-w-7xl`.
- Displays the real logo only when the configured local asset exists; otherwise it falls back to the UrbanNest Traders text wordmark.
- Keeps a skip-to-content link available for keyboard users.
- Preserves the existing header architecture unless a genuine accessibility or product requirement requires a focused change.

### Navigation

- Desktop navigation is hidden below `lg` and displayed horizontally at `lg`.
- The request-a-quote item is visually separated as the primary header CTA.
- Mobile navigation uses a 44px-class menu button, an `aria-expanded` state, Escape-to-close behavior, and focus return to the menu button.
- Use Next.js `Link` for internal navigation.

### Hero

- Use one clear Fraunces `h1`, a short supporting statement, and one primary plus one secondary path.
- Current hero composition pairs an editorial text block with a pine visual panel made from typography and restrained circles; it does not depend on a product photograph.
- Keep the first viewport calm and legible. Do not crowd the hero with a catalogue grid.

### Section headings

Use the shared `SectionHeading` module where appropriate. It supports:

- A tracked terracotta eyebrow.
- A Fraunces heading.
- Optional supporting copy.
- Left or centered alignment.
- Default or inverse text tone for light or pine sections.

Every section should connect `aria-labelledby` to a real heading ID.

### Cards

Cards should have one clear purpose, a consistent border/radius treatment, readable internal spacing, and a visible focus state when the entire card is interactive. Do not add hover movement that harms readability or keyboard clarity.

### Product cards

- Use product records from `data/catalog.ts` / `data/products.ts`.
- Show product name, short description, and a clear details link.
- Use the product's existing image path and metadata; do not duplicate product facts in JSX.
- Do not display invented prices, stock, ratings, specifications, or claims.

### Category cards

- Use category records from `getCategories()`.
- Show the category name and its existing short description.
- Link to the category/product route without inventing route-specific content.

### Buttons and links

- Primary buttons use terracotta with the darker terracotta hover state.
- Secondary buttons use a pine border or pine fill depending on context.
- Current buttons and CTA links use a minimum height around 44–48px, comfortable horizontal padding, rounded corners, semibold Inter, and visible focus outlines.
- Link labels should describe the destination or action; avoid bare decorative arrows as the only label.

### CTAs

- Bulk/corporate CTA uses a warm light panel and pine action.
- Request-a-quote CTA uses a clean surface section and terracotta action.
- CTAs are enquiry/lead-capture paths, never checkout or payment actions.

### Contact sections

- Use semantic `<address>` for contact details.
- Render contact values from `siteConfig.contact`.
- Preserve placeholders until verified business information is supplied.
- Keep contact details readable and pair the panel with one clear contact-page link.

### Footer

- Uses the pine background with background/surface text.
- Provides business description, exploration links, contact values, enquiry CTA, and legal links.
- Keep footer hierarchy quiet and scannable; it should support, not compete with, the homepage hero.

## 6. Responsive design

### Desktop (`lg` and above)

- Show full horizontal navigation and the header quote CTA.
- Use asymmetric two-column hero/about/value/contact layouts where the content benefits from them.
- Use three-column category grids and four-column featured product grids.
- Increase section padding and heading sizes while preserving readable line lengths.

### Tablet (`sm` through below `lg`)

- Keep the mobile navigation behavior until the desktop `lg` breakpoint.
- Use two-column category/product or content grids where there is enough width.
- Retain generous but reduced padding (`sm:px-8`, `sm:py-20`/`sm:py-24`).
- Allow headings to scale to their `sm` sizes without forcing horizontal overflow.

### Mobile (below `sm`)

- Stack content and cards in a single column unless a two-column grouping is explicitly legible.
- Use the mobile menu and keep controls at touch-friendly dimensions.
- Stack CTA buttons full-width or near full-width when side-by-side buttons would become cramped.
- Keep body text at readable sizes and use shorter line lengths.
- Preserve the section order and content hierarchy from the desktop page.

## 7. Accessibility

- Use semantic landmarks and headings: `header`, `main`, `section`, `nav`, `address`, and a logical `h1`/`h2`/`h3` hierarchy.
- Every section labelled with `aria-labelledby` must point to an existing heading.
- Preserve the global `:focus-visible` outline: 2px primary outline with a 3px offset, or a clearly visible equivalent on dark surfaces.
- Preserve the skip-to-content link and mobile menu keyboard behavior.
- Maintain sufficient contrast between text and its background; do not use muted text for essential information.
- Keep interactive targets approximately 44px or larger where practical.
- Provide meaningful `alt` text for informative real images. Use empty alt text only for decorative visuals whose adjacent text already conveys the content.
- Keep image containers dimensioned so real assets do not create layout shift.
- Do not rely on color alone to communicate status, category, or an action.

## 8. Imagery

The catalogue data currently references local paths under `/images/categories/`, `/images/products/`, and a brand logo path, but the project currently has no `public/` directory and those assets are missing.

`components/home/catalog-visual.tsx` checks whether an asset exists. If it does, it uses `next/image`; if not, it renders a restrained “Visual preview unavailable” fallback. This fallback is a temporary availability treatment, not replacement product imagery.

When real assets become available:

- Store them under the paths already represented by the catalogue data, or update the data deliberately as part of an asset migration.
- Use real, approved product or brand imagery only.
- Preserve the existing aspect ratios, rounded containers, and object-cover behavior.
- Write alt text that describes the useful visual content without making unsupported claims.
- Do not generate, fabricate, or source unapproved product photography.

## 9. Content and brand voice

The current voice is:

- Professional but not corporate-heavy.
- Trustworthy without exaggerated promises.
- Clear, concise, and business-friendly.
- Warm and thoughtful, with restrained editorial language.
- Oriented toward browsing and starting an enquiry.

Use existing `siteConfig`, catalogue data, and approved content models as the content source. Keep the fictional/prototype nature explicit where it is currently stated. Do not invent business facts, contact details, addresses, certifications, prices, stock claims, testimonials, or company history.

## 10. UI do / don't rules

### Do

- Maintain the approved semantic color tokens.
- Keep spacing and container conventions consistent.
- Use clear heading hierarchy and concise supporting copy.
- Keep the primary CTA obvious and the next step understandable.
- Preserve desktop, tablet, and mobile behavior.
- Reuse shared components and data helpers.
- Keep sections independently replaceable and semantically complete.
- Handle missing assets gracefully.
- Preserve visible keyboard focus and accessible touch targets.

### Don't

- Introduce arbitrary brand colors, decorative effects, or competing typography.
- Turn enquiry flows into checkout, payment, or e-commerce flows.
- Duplicate catalogue data in page components.
- Add fake business information or unsupported product claims.
- Create inconsistent card, button, or spacing variants without a documented reason.
- Hide essential information behind hover-only behavior.
- Generate replacement images when approved assets are missing.
- Add a database, CMS, authentication, AI API, or unnecessary dependency for a visual/content change.

## 11. Future AI-managed website rules

Future AI agents should treat this file as the visual source of truth unless the user explicitly requests a design-system change.

Before changing a module, the agent should:

1. Read this document and the relevant component, configuration, data, and type files.
2. Identify which rules are global and which rules belong only to the module being changed.
3. Preserve the approved tokens, typography, container widths, breakpoint behavior, focus treatment, semantic structure, and content boundaries.
4. Reuse data helpers and shared modules instead of copying catalogue or business data.
5. Keep the change isolated to the requested module whenever possible.
6. Verify keyboard access, responsive stacking, heading relationships, and missing-asset behavior.

Module-specific expectations:

- **Hero:** may change its message or composition, but must preserve global typography, spacing rhythm, contrast, and clear primary/secondary paths.
- **Product/category cards:** may change presentation, but must preserve card conventions, data ownership, image fallback, alt-text rules, and responsive grids.
- **Contact:** may change layout, but must preserve semantic address markup, verified configuration values, readable contrast, and responsive stacking.
- **Header/navigation:** may evolve interaction, but must preserve skip navigation, keyboard behavior, touch targets, and the existing route/configuration source.
- **Footer:** may be reorganized, but must retain clear navigation, contact context, legal links, and pine background contrast.

AI agents must not broaden a module request into a new design system, new business model, new dependency, or new content source without explicit approval.

## Current inconsistencies / future cleanup

- The project has no `public/` directory, so the logo, category images, and product images referenced by the data are currently missing. The existing fallback is intentional until approved assets are supplied.
- The homepage uses three inline accent colors (`#D8C7B6`, `#EADFD2`, and `#E6B08F`) that are not yet named in `app/globals.css`. Consolidating them should be an explicit design-system decision, not an automatic refactor.
- `siteConfig.contact` contains confirmation placeholders, and `siteConfig.seo.siteUrl` remains `https://example.com`. These must be replaced only with verified information.
- Several navigation and footer links point to routes that are not yet implemented. This document records their intended visual treatment but does not authorize route creation.
- `next/font/google` currently depends on network access to fetch Fraunces and Inter during development/build. Typography should remain Fraunces/Inter; any future offline/self-hosting change should be treated as an explicit infrastructure/design decision.
