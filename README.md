# Talking Buttons — marketing site (GitHub Pages)

Static HTML/CSS for **talking-buttons.com**, served via **GitHub Pages** (`/ (root)` on the default branch).

## Store links (source of truth in repo)

| Product | URL |
|--------|-----|
| Android (Google Play) | `https://play.google.com/store/apps/details?id=app.hobbysoft.speakingbuttons` |
| Chrome extension | `https://chromewebstore.google.com/detail/opdmjidbeogobcfeaedkneafgnljjfid` |

Same IDs as in [`app/src/main/res/values/strings.xml`](../app/src/main/res/values/strings.xml).

## Language redirect (`/` → `/en/` or `/ru/`)

The root [`index.html`](index.html) runs a short script that:

1. Reads **`localStorage.tb_locale`** (`en` or `ru`) if set.
2. Otherwise picks a locale from **`navigator.languages` / `navigator.language`** (Russian if the primary tag is `ru` or starts with `ru-`, else English), stores it, and redirects with **`location.replace`** to `en/` or `ru/`.
3. Each localized page sets `tb_locale` on load so the last visited language wins (including after using the header language switch).

With **JavaScript disabled**, the root page shows the manual language chooser inside `<noscript>`.

## Enable GitHub Pages

1. Repository **Settings → Pages**.
2. **Build and deployment → Source:** Deploy from a branch.
3. Branch: `main` (or your default), folder: **`/ (root)`**.
4. After the first deploy, under **Custom domain**, enter `talking-buttons.com` if DNS is ready. The [`CNAME`](CNAME) file in this folder should match your chosen hostname (apex or `www`).

## DNS (apex domain)

At your DNS provider, follow [GitHub Pages custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) — typically **A** and **AAAA** records for `talking-buttons.com`, or **CNAME** to `<user>.github.io` for a `www` subdomain.

## Support email

Pages use **app.hobbysoft@gmail.com**.

## Board library (OBF/OBZ)

Ready-made boards are listed on [`en/boards.html`](en/boards.html) and [`ru/boards.html`](ru/boards.html). Put downloadable files in [`downloads/boards/`](downloads/boards/) using the filenames referenced there (see [`downloads/boards/README.md`](downloads/boards/README.md)).

## Screenshots

Marketing screenshots live under [`images/`](images/) and are shown on the English and Russian home pages (`en/index.html`, `ru/index.html`).

## Canonical URLs

Pages assume the site is served at **https://talking-buttons.com/**. If you test on `https://<user>.github.io/<repo>/`, relative links still work; `canonical` and `hreflang` URLs point at the custom domain.
