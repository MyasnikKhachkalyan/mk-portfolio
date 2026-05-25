#!/bin/bash
set -e

BUCKET="myasnikk-portfolio"
DISTRIBUTION_ID="E2VJLURZDG24KY"
PROFILE="mk-portfolio"
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"

echo "Building..."
npm --prefix "$PROJECT_DIR" run build

echo "Uploading to S3..."
aws s3 sync "$PROJECT_DIR/dist/" "s3://$BUCKET" --delete --profile "$PROFILE"

echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
  --distribution-id "$DISTRIBUTION_ID" \
  --paths "/*" \
  --profile "$PROFILE" \
  --output text > /dev/null

echo "Deployed! https://myasnikk.com"
