[![license](https://img.shields.io/github/license/fabidick22/aws-serverless-devops)](https://github.com/fabidick22/aws-serverless-devops/blob/develop/LICENSE)
![CI Process](https://github.com/fabidick22/aws-serverless-devops/workflows/CI%20Process/badge.svg)

# aws-serverless-devops
This repository is a base project to create a REST API in a serverless architecture. We are going to use AWS-SAM with the CI/CD process to create or update all the necessary resources in AWS.

## Features
- CI/CD with GitHub Actions
- Automatic releases (pre-release and release)
- Stage and prod environment
- AWS lambda with nodejs12.x 

## TODO
- Add feature toggles support
- Add OpenAPI Specification (OAS)
- Add contract-first development style

## CI/CD Pipeline
![DevOps Pipeline](https://raw.githubusercontent.com/fabidick22/aws-serverless-devops/master/.docs/images/devops.png)