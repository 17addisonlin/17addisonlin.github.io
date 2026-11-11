# Addison Lin’s personal website

A small Jekyll site for projects, writing, and photographs, published through GitHub Pages.

## Local preview

```sh
bundle install
bundle exec jekyll serve
```

Open <http://127.0.0.1:4000/>. The GitHub Actions workflow builds with Ruby 3.2 on Ubuntu 24.04.

## Update content

- **Profile, navigation, contact, and links:** `_data/settings.yml`. The longer biography is `_pages/about.md`.
- **Papers:** `_includes/section-paper.html` contains the research placeholder, displayed before projects on the homepage and `/projects/`. The navigation has one Projects tab; `/paper/` redirects to `/projects/#papers`.
- **CV / résumé:** set `resume_url` in `_data/settings.yml` to an uploaded PDF path, such as `/files/Addison-Lin-Resume.pdf`, or a supplied external URL. The link appears on the homepage and About page only when this value is set.
- **Projects:** `_projects/`. Set `featured: true` and `featured_order` to select and order homepage entries; the homepage shows at most two. Optional fields include `short_title`, `technologies`, `repo_url`, and `demo_url`.
- **Writing:** `_posts/YYYY-MM-DD-title.md`. New personal posts appear in Recent writing by default, with at most four on the homepage. Use `featured: false` to leave a post in the archive only. Only personal posts belong in this collection. The reusable style guide lives at `/blog/template/` (`_pages/blog-template.md`) and is not included in the post feed.
- **Albums:** `_gallery/`. Set `cover`, an optional smaller `thumbnail`, and the `images` list. Use `gallery_order` to arrange visible albums and `listed: false` to omit an album from gallery lists. Use `coming_soon: true` with a `year` and no images for an upcoming album. Original photographs remain in `images/`; smaller album previews are in `images/previews/`. Las Vegas is unpublished and its asset folder is excluded from the build while remaining in the repository.
- **Appearance:** `_sass/4-layouts/_layout.scss` contains the centered layout and responsive styles; theme colors are in `_sass/0-settings/_color-scheme.scss`.

The composer at `/login/` previews and exports Markdown for `_posts/`; it does not publish automatically. Its client-side login and the optional PIN gate are convenience controls, not access protection for private content.

## Visual editing with Pages CMS

Open <https://app.pagescms.org>, sign in with GitHub, and install the Pages CMS GitHub App for this repository. The root `.pages.yml` configures Blog posts, image uploads, PDF/file attachments, and the résumé selector.

Use the `website-refresh` branch for the initial trial. Once reviewed and merged, use `main` for normal publishing. New posts start with **Published** off; turn it on and save when the post is ready for the website. Saved files on this public repository are public even while excluded from the website.

See `_plans/pages-cms-setup.md` for the setup and first-post walkthrough. The footer’s **Write** link opens Pages CMS; the existing Composer remains available.

## Publishing

Pushing to `main` runs `.github/workflows/jekyll.yml`. GitHub Pages uses **GitHub Actions** as its publishing source. A successful workflow builds and deploys the static site.

The redesign proposal and implementation notes are in `_plans/website-redesign.md`. Jekyll excludes this underscore-prefixed directory from the published site.
