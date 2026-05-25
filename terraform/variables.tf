variable "aws_profile" {
  description = "AWS CLI named profile to use"
  type        = string
  default     = "mk-portfolio"
}

variable "aws_region" {
  description = "AWS region for S3 bucket"
  type        = string
  default     = "eu-west-2"
}

variable "project_name" {
  description = "Project name used for resource naming"
  type        = string
  default     = "myasnikk-portfolio"
}

variable "domain_name" {
  description = "Custom domain name (leave empty to use CloudFront default)"
  type        = string
  default     = "myasnikk.com"
}
