# Pardis Taghavi

Research website at https://pardistaghavi.github.io/.

This is a static HTML, CSS, and JavaScript version of the approved research website. GitHub Pages publishes the root of `main`. No installation or build is required to serve the site.

## Editing

- `index.html` contains the profile, publications, experience, projects, education, skills, awards, and service.
- `assets/site.css` contains the stylesheet.
- `assets/site.js` controls the silent looping videos and respects reduced-motion preferences.
- `images/` contains original images and the existing optimized animations and videos.
- `resume.pdf` is the downloadable resume.

Run `sh run_server.sh` and visit http://localhost:8000 to preview locally.

To refresh the static copy from the original React website checkout after building it, run `node scripts/export-from-source.cjs /path/to/source /path/to/this/repository`. The source checkout must have its dependencies installed and current build output. The existing video script is retained.

## Previous website

The pre-migration state and complete history are preserved in branch `codex/archive-before-research-redesign-2026-09-12`. The last full version of the former design is commit `ce0bb2a99424eb1aa5ec873eabf83635fc6afc00`. No history was rewritten.

The former Jekyll configuration and content remain available in that history. The unused citation-crawler workflow and template sponsorship file were removed from the active version. Existing search-engine verification files and the original license were retained.

## Search indexing

`robots.txt` permits crawlers and points to `sitemap.xml`. Google and Bing use that sitemap. Keep its homepage `lastmod` accurate when updating page content.

After a successful GitHub Pages publication, the IndexNow workflow submits only changed homepage content and/or the resume using the existing public ownership key. It does not run on a schedule or submit unchanged pages. The key file must remain publicly accessible.
