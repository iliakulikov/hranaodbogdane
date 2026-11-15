# Hrana od Bogdane

A plain HTML, CSS and JavaScript recreation of https://needle-veggie-69929683.figma.site/, based on the supplied App.tsx and CSS. No framework, dependencies, compilation, or recipe pages/modals.

Open `index.html` directly, or run `python3 -m http.server 8080` in this directory and visit http://localhost:8080. Deploy this folder to any static web host.

- `index.html`: all content, dishes, prices, and Telegram links.
- `styles.css`: original responsive design and browser reset.
- `script.js`: category filtering, mobile navigation, advisor controls.
- `assets/food/`: original food photos downloaded from the reference website.
- `assets/brand/`: transparent Bogdana WebP images (800 × 731, quality 86).

The Bogdana artwork was recovered from the published site. Both WebPs together are 108,438 bytes, approximately 73% smaller than its source PNGs. Google Fonts requires an internet connection; local serif/sans-serif fallbacks are provided. Orders open the existing Telegram bot.

## Search and sharing

The production address is `https://hranaodbogdane.rs/`. The HTML includes a canonical URL, Russian search description, Open Graph/Twitter metadata and JSON-LD for the website, page, food business and delivery service. All menu content is available in the HTML without JavaScript. `robots.txt` permits crawlers, including OAI-SearchBot; `sitemap.xml` lists the single public page. No recipe pages are indexed or generated.

`assets/brand/bogdana-social-preview.jpg` is the 1200 × 630 social-sharing image. Keep the metadata and JSON-LD delivery description consistent with the visible content when delivery terms change. Update all absolute URLs if the domain changes.

When deploying, serve this directory at the domain root over HTTPS, redirect HTTP and www to `https://hranaodbogdane.rs/`, and redirect `/index.html` to `/`. Ensure the host/CDN does not block search crawlers or send an `X-Robots-Tag: noindex` header. Submit `https://hranaodbogdane.rs/sitemap.xml` in Google Search Console and Bing Webmaster Tools after verifying ownership. These are hosting/account steps; they have not been performed by editing these files. Structured data and crawler access do not guarantee indexing, rich results, rankings or AI citations.
