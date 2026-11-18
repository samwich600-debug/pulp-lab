# Pulp Lab

Plastic-free packaging research and ideation site; thesis prototype for helping graphic designers adopt eco-friendly practices.

## Where it lives
- Repo: https://github.com/samwich600-debug/pulp-lab (public)
- GitHub Pages: https://samwich600-debug.github.io/pulp-lab/
- Claude artifact (private, sharable): https://claude.ai/artifact/JcbVVXAe7TdqKt5u2sH1ui

## Files
- `pulp-lab.html`: the whole site (single page, hash routing). Edit this file.
- `index.html`: GENERATED for GitHub Pages by `python3 build-pages.py`. Never edit by hand; rebuild after every change to `pulp-lab.html`.
- `data-*.js`: case studies, companies, bulk-buy links, supplier prices, material specs and UK/US/EU fee rates (compiled November 2026).
- `img/`: `p-*` plastic items, `e-*` eco swaps, `s-*` swaps, `c-*` company formats, `k-*` case products, `w-*` before items, `m-*` material close-ups, `brand/` real brand photos (copyrighted, study use only).
- `video/`: Pexels clips for the video home page, currently off (`SHOW_HOME=false` in `pulp-lab.html`).
- `tools/cutout.swift`: removes photo backgrounds with macOS Vision. Build: `swiftc -O tools/cutout.swift -o /tmp/cutout`; run: `/tmp/cutout in.png out.png`, then `sips -Z 520 out.png`.

## Workflow after editing
1. `python3 build-pages.py`
2. Commit and push to `main`; Pages redeploys automatically.
3. To update the Claude artifact, publish `pulp-lab.html` to the URL above with the data files and any new images.

## Conventions
- Look: minimal and serious. White paper (#FFFFFF), near-black ink (#0C0C0B), Instrument Serif for headlines and big numbers, Geist for everything else, hairline borders, black pills for actions, solid (not frosted) popups. Logo is still the temporary dot-grid switcher.
- Product photos: unbranded, studio style, background removed, soft green-tinted shadow.
- Cost wording: say "X% more/less than plastic, per unit", never "+X% vs plastic".
- Numbers must be sourced and dated; mark estimates as estimates. Never invent prices; use "Quote only" when a supplier doesn't publish one.
- Keep `<meta name="robots" content="noindex">` in the Pages build.
