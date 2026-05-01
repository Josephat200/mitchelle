# Michelle Chesire — Portfolio

This repository contains a small static portfolio website for Michelle Chesire.

Deployment notes for Render (static site):

- Branch: `main`
- Root Directory: leave empty or set to `.` (site is at repository root)
- Build Command: leave empty (no build step required)
- Publish Directory: `.`

To deploy on Render using the web UI:

1. Create a new **Static Site** on Render.
2. Connect your GitHub account and choose the `Josephat200/mitchelle` repository.
3. Set **Branch** to `main`.
4. Leave the **Root Directory** blank (or set `.`).
5. Leave **Build Command** blank.
6. Set **Publish Directory** to `.`.
7. Create the site and trigger a deploy.

Quick Git commands (already used to push this repo):

```bash
git add .
git commit -m "Add Render blueprint and deployment docs"
git push origin main
```

Optional: continuous deploy via Render blueprint

This repo includes `render.yaml` (a Render blueprint) configured for a static service. You can import this blueprint into Render when creating a new service to pre-fill settings.

Notes:
- The site uses Google Fonts and an external WhatsApp link, so a browser with internet access will load fonts and the chat link.
- The PDF download button triggers the browser print dialog — users can save the page as PDF using that dialog.

If you want, I can add a GitHub Action that triggers Render's API for a manual deploy, but it requires storing a Render API key in GitHub Secrets.
