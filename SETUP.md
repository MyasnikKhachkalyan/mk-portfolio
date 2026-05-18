# Setup & Development

## Prerequisites

- Node.js 20+
- npm 10+
- AWS CLI (for deployment)
- Terraform 1.5+ (for infrastructure)

## Local Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Lint & Type Check

```bash
npm run lint
npm run build   # tsc runs as part of build
```

## Deployment

Infrastructure is managed with Terraform in `terraform/`.

```bash
cd terraform
terraform init
terraform plan
terraform apply
```

Build and deploy:

```bash
npm run build
aws s3 sync dist/ s3://<bucket-name> --delete
aws cloudfront create-invalidation --distribution-id <dist-id> --paths "/*"
```

See `terraform/` for full infra details.
