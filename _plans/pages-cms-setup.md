# Pages CMS setup

The repository configuration is `.pages.yml` at the root. It provides a visual blog editor, image uploads, downloadable attachments, and a PDF résumé selector. The existing Composer remains available as a fallback.

## Connect your account

1. Open <https://app.pagescms.org> and sign in with your GitHub account, `17addisonlin`.
2. Follow the prompt to install the Pages CMS GitHub App. Choose **Only select repositories**, then select **17addisonlin.github.io**.
3. Return to Pages CMS and open **17addisonlin/17addisonlin.github.io**.
4. Select the **website-refresh** branch for the initial trial. Pages CMS reads `.pages.yml` from the selected branch. This branch has the current redesign and CMS support, and does not trigger the production deployment.
5. You should see **Blog posts**, **Site title and résumé**, **Images**, and **PDFs and attachments**.

The user must complete GitHub sign-in and approve the app installation. No GitHub token or app secret belongs in `.pages.yml` or the website source.

## First post

1. Open **Blog posts** and create an entry.
2. Add a title, summary, date, and optional topics.
3. Leave **Published** off while preparing it. Leave **Show on homepage** on if it should appear among the four latest posts once published.
4. Use **Post** for visual writing. Add photographs through the editor’s image picker; uploads default to `images/blog/`.
5. Optionally choose a **Cover image**, add your own **Video embed URL**, or add **Attachments** with a link label and uploaded file.
6. Save and reopen the entry to check the text and images. Test a caption and image layout before migrating complex posts from other editors; the rich-text preview is not a full rendered-site preview.

On `website-refresh`, changes stay on the review branch. Once the redesign is reviewed and merged into `main`, choose **main** in Pages CMS for normal publishing. Turn **Published** on and save to include a post on the website; the GitHub Actions deployment runs when main changes. Saving with **Published** off keeps it off the website, but the saved file and uploaded media are still visible in the public repository.

Keep a post’s filename stable after it is published. Its generated creation filename uses the current date and title; the **Post date** field determines the date displayed on the website.

## Images and files

- **Images:** browse existing images or upload blog photographs into `images/blog/`.
- **PDFs and attachments:** upload files into `files/`.
- **Attachments:** appear as labeled links beneath a post after publication.
- For a résumé, open **Site title and résumé**, select **CV or résumé PDF**, upload/select the PDF, and save. This sets the existing `resume_url` value; the homepage and About page then display the CV / Résumé link.

The configuration uses `settings.content.merge: true` so other fields in existing posts and site settings are preserved when these forms are saved. The actual hosted editor still needs a signed-in save/reopen check after connection.

## Reference

- [Pages CMS quick start](https://pagescms.org/docs/quick-start/)
- [Configuration](https://pagescms.org/docs/configuration/)
- [Media paths](https://pagescms.org/docs/configuration/media/)
- [Rich-text fields](https://pagescms.org/docs/configuration/fields/rich-text/)
- [File uploads](https://pagescms.org/docs/configuration/fields/file/)
- [Preserving unconfigured fields](https://pagescms.org/docs/configuration/settings/)
