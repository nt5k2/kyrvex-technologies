# Kyrvex Technologies

The official first website for Kyrvex Technologies. Built with Astro, TypeScript and modern CSS; designed as an extensible static site for GitHub Pages.

## Local development

Requirements: Node.js 20.18+ (Node 22 recommended).

```bash
npm install
npm run dev
```

Open the local address shown in the terminal (normally `http://localhost:4321`).

Other useful commands:

```bash
npm run check
npm run build
npm run preview
```

## Project structure

```
src/
  components/   Reusable brand, header and footer
  layouts/      Shared page layout and SEO metadata
  pages/        Future pages live here; index.astro is the homepage
  styles/       Global design system and responsive styling
public/
  logo/         Put the official logo here when it is available
  CNAME         Custom-domain configuration for GitHub Pages
.github/workflows/deploy.yml   Automatic deployment on pushes to main
```

## Publish to GitHub Pages

1. Create a new GitHub repository (for example `kyrvex-technologies`) without a README.
2. In this folder, initialise and publish the repository:

   ```bash
   git init -b main
   git add .
   git commit -m "Initial Kyrvex website"
   git remote add origin https://github.com/YOUR-ACCOUNT/YOUR-REPOSITORY.git
   git push -u origin main
   ```

3. On GitHub, go to **Settings → Pages**. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open the **Actions** tab and wait for “Deploy Kyrvex website” to complete. The site is then published.

## Connect kyrvex.dev

The `public/CNAME` file is already included in the deployment artifact. In GitHub **Settings → Pages**, add `kyrvex.dev` as the custom domain and enable **Enforce HTTPS** once GitHub makes it available.

At the DNS provider for `kyrvex.dev`, create these records:

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `YOUR-ACCOUNT.github.io` |

Replace `YOUR-ACCOUNT` with the GitHub account or organisation that owns the repository. Do not create an additional CNAME record for `@`; the four A records serve the root domain. DNS changes may take some time to propagate. GitHub’s domain verification instructions take precedence if its Pages settings show an extra TXT record.

## Logo

No official logo asset is included in this project. The current typographic mark is intentional and keeps the site finished-looking in the meantime. Place the official logo in `public/logo/`, then update `src/components/Brand.astro` to reference it.
