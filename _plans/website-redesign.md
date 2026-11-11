# Website redesign plan

Status: implemented locally for review. Local preview: http://127.0.0.1:4001/. The redesign has not been published.

## Direction

Bring Addison Lin's website closer to the calm, readable structure of
[Shunyu Yao's homepage](https://ysymyth.github.io/), while retaining Addison's
projects, personal writing, photography, and useful existing controls.

The reference uses a centered container, a small portrait beside its introduction,
plain section headings, and compact lists with direct links. Its
[source repository](https://github.com/ysymyth/ysymyth.github.io) confirms a simple
Jekyll implementation. Use that structure as inspiration and write the redesign
for this repository's content and collections.

Working assumption: “central step” means the centered main content area. A
persistent sidebar is not part of the proposed default; clarify this if the phrase
was meant to describe another feature.

## Proposed visual design

- Center a content area approximately 920px wide, with 20–24px mobile gutters.
- Keep paragraphs around 65–75 characters wide for comfortable reading.
- Use a system sans-serif font, approximately 17px body text, and generous line height.
- Use a light background, dark text, muted metadata, and one restrained blue link color.
- Retain system color preference and the manual dark-mode toggle, with both themes designed together.
- Replace the large cover banner and desktop sidebar with a compact top masthead.
- Keep text left-aligned within the centered page. Place a roughly 160–180px portrait
  beside the introduction on desktop; stack it on small screens.
- Use simple lists and subtle dividers for projects and writing. Reserve larger
  images for photography and individual project pages.
- Remove decorative parallax, oversized section spacing, and unnecessary entrance
  animations from the redesigned public pages.

## Homepage structure

```text
Addison Lin           About  Projects  Writing  Gallery  Links
                                              EN/中文  Theme
------------------------------------------------------------
Short introduction                            Portrait
Current role, interests, and focus
Email · GitHub · selected social links

Selected projects
  Project name
  One-sentence description · technologies
  Details · Code · Demo (when an actual demo exists)

Recent writing                                      All posts
  Date   Post title and short description

Photography                                        All albums
  Three small previews with album titles

Contact · Social links · Composer · Videos
```

Navigation will wrap or use an accessible compact menu on mobile rather than
requiring horizontal dragging. The name links to the homepage. The existing
`/about/` route remains available for a longer biography.

## Features and content

| Existing element | Proposed treatment |
| --- | --- |
| Profile and interests | Keep the existing portrait and personal interests; shorten the homepage introduction. Put the longer quote and biography on About. Confirm the current role before updating factual claims. |
| Projects | Feature TrustMeter, PeerLink, StockPulse, and VisionScribe as compact entries. Preserve detail pages and repository links. Use explicit featured ordering instead of relying on the existing placeholder-looking dates. |
| Writing | Show up to three selected recent posts. Preserve the archive, tags, dates, and pagination. Keep sample theme articles out of featured lists pending a content decision. |
| Gallery | Keep albums and image viewing. Show a restrained homepage preview and a more visual dedicated gallery. Review mismatched album descriptions and captions. |
| Theme toggle | Keep it in the masthead; retain saved preference and system preference behavior. |
| EN/中文 | Keep the existing translation controls in a compact utility area. Preserve readable content when translation is unavailable. |
| Quick Links | Keep `/quick-links/` as the Links page. Render a simple resource list, populated only with supplied links. |
| Contact | Keep `/contact/`. Use a working email link initially; retain a submission form only once a valid form endpoint is configured. |
| Composer/login | Keep `/login/`, Markdown preview, copy, download, and logout. Move its entry to the footer to simplify visitor navigation. Preserve its local-export behavior. |
| PIN-gated pages | Preserve their current convenience gate without describing it as private access. The existing implementation delivers content to the browser and is not authentication. Real protected content would require separate scope. |
| Videos | Keep existing URLs. Leave the unfinished section out of primary navigation and homepage highlights until personal video content is ready. |
| RSS and metadata | Preserve RSS, canonical URLs, and social previews; replace theme descriptions with accurate personal text. |

Clean up the About page's “Dave Nixon” template biography, generic page descriptions,
the duplicate sample post, invalid footer markup, and duplicate analytics loading.
Do not silently delete posts or albums: identify sample/duplicate content, exclude
it from curated sections, and make deletion a separate content decision. Remove
plaintext credential hints in configuration comments; this alone does not turn
the composer or PIN gate into secure authentication.

## Implementation sequence

### 1. Inventory and content selection

- Record current published page and collection URLs for regression checks.
- Identify personal content, sample content, and incomplete sections.
- Add explicit project/post selection metadata such as `featured` and
  `featured_order`, plus repository/demo URLs where verified.
- Draft the short introduction from the existing profile, without inventing
  experience, accomplishments, dates, or project results.

Deliverable: content map and a desktop/mobile layout proposal using real content.

### 2. Shared layout and homepage

- Update `_layouts/default.html`, `_includes/header.html`,
  `_includes/section-author.html`, `_includes/footer.html`, and `index.html`.
- Replace sidebar and cover styling in `_sass/4-layouts/_layout.scss`.
- Establish shared typography, spacing, links, focus states, and theme colors.
- Rework the project/blog/gallery homepage includes around the new hierarchy.
- Consolidate analytics into one configured include.

Deliverable: recognizable homepage preview with real projects and working navigation.

### 3. Supporting pages

- Apply the same visual language to project and writing indexes and detail layouts.
- Keep screenshots on project detail pages while emphasizing overview, stack,
  existing features, and links.
- Restyle About, Gallery, Contact, Links, and the composer consistently.
- Preserve current permalinks and assets; add redirects only if a URL must change.

Deliverable: a coherent site across all existing routes.

### 4. Functional verification and polish

- Check navigation, internal links, project repository links, RSS, images, and contact actions.
- Verify dark mode, saved preferences, translation controls, gallery viewing,
  blog pagination, composer export, and existing PIN interactions.
- Check phone, tablet, and desktop widths, keyboard focus, text contrast, image
  descriptions, and reduced-motion preferences.
- Optimize oversized presentation images without deleting the original photographs.
- Remove unused theme scripts only after confirming that retained features do not need them.

Deliverable: verified preview with any browser-testing limitations stated explicitly.

### 5. Release

- Keep Jekyll, the current collections, and the repaired Ubuntu 24.04 Pages workflow.
- Run a production Jekyll build and inspect generated URLs and output.
- Review the finished preview before deployment; this planning request does not
  authorize publishing the redesign.
- After publishing is authorized, deploy through GitHub Actions and verify the
  homepage, main indexes, representative detail pages, and assets return HTTP 200.

## Completion criteria

- The homepage communicates who Addison is and what he builds without a large banner.
- The site has a centered, readable main column and a clear mobile layout.
- Existing projects, writing, albums, and utility routes remain reachable.
- Featured content is personal and intentional rather than inherited theme examples.
- Retained controls work, and no contact form appears to accept messages through an invalid endpoint.
- The production build succeeds and the existing deployment setup remains intact.

## Decisions to confirm before implementation

1. Whether “central step” means the centered content column proposed here.
2. Whether any current feature should remain prominent in the primary navigation;
   the default proposal moves Composer and unfinished Videos to secondary links.
3. Current profile wording and which posts/projects should be featured. Until then,
   use existing facts and content, with no invented additions.


## Implementation verification

- Jekyll build and JavaScript syntax checks pass.
- Generated-site link check preserved all 38 existing HTML pages with no missing local links or assets.
- Desktop and 400px mobile browser review completed in Chrome.
- Dark/light mode, Chinese/English translation, image enlargement, and composer login/logout and preview checked in the browser.
- Album preview copies retain original photographs and reduce album-cover downloads by 93% (7.61 MB to 0.53 MB for all four covers).
- The duplicate sample post remains at its original URL but is excluded from archive lists and RSS.
- PIN unlock and composer validation checked in the browser.
- Profile wording continues to use existing information pending the owner’s updates.


## Follow-up content revisions — November 11, 2026

- Added the original globe photograph near the bottom of About, with its full framing and a personal caption.
- Removed the six inherited sample posts and four sample videos at the owner’s request; the Mid-Autumn post remains.
- Replaced the old Elements page with one blog style reference at `/blog/template/`, using the actual post layout and covering text, headings, photographs, captions, lists, code, tables, and video front matter. The guide stays outside the post feed.
- Added the Paper homepage section and `/paper/` placeholder, with no invented publication details.
- Prepared optional CV/résumé links for either a local PDF or an external URL. No link is shown before a document is supplied.


## Navigation and homepage refinements — November 11, 2026

- Consolidated research and software under the Projects navigation item. Both the homepage Project section and the full Projects page show Papers before Projects; the old `/paper/` URL redirects to the papers anchor.
- Capped homepage projects at two and writing previews at four, retaining the heading links and adding the requested lower arrow links.
- Listed albums in the requested order: Seattle (2026, coming soon), New York (2025), Tennis (2024). APIA D.C. is unlisted; Las Vegas is unpublished and its photo folder/preview are excluded from the build, with originals retained in source.
- Changed the introduction heading to “Hello, friends.” while retaining Addison Lin in the masthead.
- Verified the preview limits by rendering six in-memory candidate projects and posts; checked the production output for album visibility, source preservation, and all internal links.


## Pages CMS preparation — November 11, 2026

- Added `.pages.yml` for visual blog editing, image uploads, file attachments, and the résumé PDF selector.
- Enabled merge behavior to preserve existing unconfigured metadata.
- New posts default to unpublished; the existing personal post is explicitly published.
- Added rendered attachment links beneath posts and a footer Write link.
- Prepared the `website-refresh` review branch; live deployment still requires merging into main.
- GitHub account connection and app installation must be completed by the owner before the hosted editor can be tested end to end.
