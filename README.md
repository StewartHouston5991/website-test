# Public Website Template

Minimal, accessible static site template you can fork and deploy.

Quick start

1. Preview locally (open `home.html` in a browser or run a simple server):

```bash
# Python 3
python3 -m http.server 8000
# then open http://localhost:8000
```

2. Update content in the HTML files: `home.html`, `about.html`, `contact.html`.

3. Deploy

- GitHub Pages: push to the `gh-pages` branch or enable Pages from `main`/`master` in repo settings.
- Netlify or Vercel: connect the repository and set the build to "None" (static) or point to the folder.

Contact form

The contact form in `contact.html` uses a Formspree placeholder. Replace the `action` with your Formspree endpoint or your backend URL.

License

Use as you like.
