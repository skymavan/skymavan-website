# SkyMavan website

Premium static company site for SkyMavan, an AI product studio building custom agents, workflow automation, integrations, and AI SaaS products.

## Stack

- Next.js App Router, React 19, TypeScript, pnpm
- Tailwind CSS v4 and customized shadcn/Radix primitives
- React Hook Form with Zod validation
- Motion, React Three Fiber, Drei, and Three.js
- Vitest, Playwright, and axe
- GitHub Pages static export

## Local development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verification

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm test:e2e
pnpm build
```

The production export is written to `out/`.

## GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` validates and deploys pushes to `main`. In repository settings:

1. Set Pages source to **GitHub Actions**.
2. For `skymavan.com`, set the repository variable `PAGES_CUSTOM_DOMAIN=true`, then configure the domain in Pages settings after the first successful deployment.
3. For a repository-path deployment, leave that variable unset. The build derives `/<repository-name>` from `GITHUB_REPOSITORY`.
4. `NEXT_PUBLIC_BASE_PATH` can override the derived path for a nonstandard deployment.

Add and verify the DNS records GitHub shows for the custom domain. A committed `CNAME` file is not needed for this custom workflow.

## Authoritative project context

- `PRODUCT.md` records positioning, audiences, and experience principles.
- `DESIGN.md` records the Living Systems visual direction and committed tokens.
- `docs/content-roadmap.md` records the post-launch content strategy.
- `docs/asset-sources.md` records generated and licensed visual sources.
