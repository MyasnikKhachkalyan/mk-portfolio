variable "aws_region" {
  description = "AWS region for S3 bucket"
  type        = string
  default     = "eu-west-2"
}

variable "project_name" {
  description = "Project name used for resource naming"
  type        = string
  default     = "mk-portfolio"
}

variable "domain_name" {
  description = "Custom domain name (leave empty to use CloudFront default)"
  type        = string
  default     = ""
}
