output "s3_bucket_name" {
  description = "S3 bucket name for deployment"
  value       = aws_s3_bucket.site.id
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID (for cache invalidation)"
  value       = aws_cloudfront_distribution.site.id
}

output "cloudfront_domain_name" {
  description = "CloudFront domain name"
  value       = "https://${aws_cloudfront_distribution.site.domain_name}"
}

output "site_url" {
  description = "Your live site URL"
  value       = "https://${var.domain_name}"
}

output "github_deploy_role_arn" {
  description = "Set as the AWS_ROLE_ARN secret on the GitHub repository"
  value       = aws_iam_role.github_deploy.arn
}
