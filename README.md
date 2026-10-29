# ScopsK website

Demonstration / marketing site for App Store & Play Store submission.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS (ScopsK prototype palette: terracotta / sage / brand orange `#ff5722` / yellow `#ffeb3b`)
- Sora (display) + Manrope (body)
- Light & dark mode (persisted in `localStorage`, respects `prefers-color-scheme`)
- React Router (`/`, `/privacy`, `/terms`, `/account-deletion`)

## Logos

Source files live in `favicons/`:

| File | Use |
|------|-----|
| `scopsk-logo-light-mode.png` | Dark brown mark → **light** UI backgrounds |
| `scopsk-logo-dark-mode.png` | Cream mark → **dark** UI backgrounds |

Copies are served from `public/favicons/` for Vite.

## Configure store links & contact

Edit `src/config/site.ts`:

```ts
appStoreUrl: 'https://apps.apple.com/...',
playStoreUrl: 'https://play.google.com/store/apps/details?id=...',
contactEmail: 'hello@scopsk.ae',
supportEmail: 'support@scopsk.ae',
```

Empty store URLs keep the buttons but scroll to `#download` with a “coming soon” note.

## Contact form

The contact form validates client-side, then opens a `mailto:` draft to `contactEmail`. To wire an API later, replace the mailto stub in `src/sections/Contact.tsx`.

## Scripts

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
```

## Legal pages

Privacy, Terms, and Account deletion are store-ready templates — have counsel review before public launch.
