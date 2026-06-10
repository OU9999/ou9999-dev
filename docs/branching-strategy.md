# Branching Strategy

## Branches

- `main`: production branch. Protected. Production deployments are created from this branch only.
- `release/modernize-blog-stack`: integration branch for the stack modernization work. Deploys as Vercel Preview.
- `feature/*`: short-lived task branches. Open pull requests into the active release branch.
- `hotfix/*`: urgent production fixes branched from `main`. Merge back into `main`, then back-merge into the active release branch.

## Pull Requests

- Changes into `main` must go through a pull request.
- The `build` GitHub Actions check must pass before merging into `main`.
- Use Vercel Preview deployments to verify release and feature branches before promotion.

## Release Flow

1. Branch from `main` into `release/modernize-blog-stack`.
2. Merge feature branches into `release/modernize-blog-stack`.
3. Validate CI and Vercel Preview on the release branch.
4. Open a pull request from `release/modernize-blog-stack` into `main`.
5. Merge only after CI passes and the production URL impact is reviewed.

## URL Compatibility

Keep these public URLs stable during migrations:

- `/`
- `/about`
- `/portfolio`
- `/p/{slug}`
- `/tags/{tag}`
- `/feed.xml`
- `/sitemap.xml`
