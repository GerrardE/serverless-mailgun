# Serverless Mailgun

## Getting Started

This repo contains an app for saving mailgun events sent via webhooks which in turn hits an API Gateway which proxies the information to a Lambda. The first Lambda saves a copy of the event and publishes a transformed version to AWS SNS. The second lambda exposes an endpoint for retrieving saved events.

## Required Technologies
This application makes use of the following libraries:
- [AWS DynamoDB](https://console.aws.amazon.com/dynamodb) for the database
- [AWS API Gateway](https://console.aws.amazon.com/apigateway) for proxying lambda requests
- [AWS Lambda](https://console.aws.amazon.com/lambda) for serving Lambda functions
- [AWS S3](https://s3.console.aws.amazon.com/s3) for static file storage
- [Typescript](https://www.typescriptlang.org/) for Javascript type safety
- [Dotenv](https://www.npmjs.com/package/dotenv) from npm for managing environment variables
- [Mocha](https://mochajs.org/) and [chai](https://www.chaijs.com/) for testing
- [Serverless framework](https://www.serverless.com/) for development and deployment
- [Mailgun](https://www.mailgun.com/) for emitting events

## Installation

### 1. Installation Steps

Provision the necessary services needed for running the application:

1. Clone this repository to your PC and run `yarn` in the root folder to install dependencies
1. Rename `.env.example` to `.env` and provide all the following variables:
    - `STAGE=` dev or prod
    - `BASE_URL`= localhost base url or prod base url e.g: `http://localhost:3000` for running integration tests
    - `ACCESS_KEY_ID=` AWS access key id
    - `SECRET_ACCESS_KEY=` AWS secret access key
    - `SNS_ARN=` AWS Simple notification service ARN
    - `MAILGUN_API_KEY=` for verifying mailgun requests
    - `NOTIFICATION_EMAIL=` email you want to receive notifications on

1. Start the serverless-mailgun app in dev mode with `npm run dev`.
1. To deploy, make sure `STAGE=prod` in the .env file and run `yarn deploy` in the root folder of the application.

## Tests

This project contains some unit and integration tests. Follow these steps to run the tests.

1. `yarn test`

## Improvements

The project can be improved by writing more tests, handling legacy Mailgun Events and also other event bodies apart from `application/data` e.g `multipart/form-data`

## References

- [Write a Custom Webhook to Handle MailGun events](https://tygertec.medium.com/write-a-custom-webhook-to-handle-mailgun-events-f0155836e713)
- [Working with Mailgun webhooks](https://medium.com/@kehers/working-with-mailgun-webhooks-d705ba1b259f)
- [Create a Serverless App on AWS using TypeScript — Part 1](https://levelup.gitconnected.com/creating-a-simple-serverless-application-using-typescript-and-aws-part-1-be2188f5ff93)
- [Mailgun Docs](https://documentation.mailgun.com/en/latest/user_manual.html#introduction)
- [Serverless Docs](https://www.serverless.com/framework/docs/)
- [DynamoDB Docs](https://docs.aws.amazon.com/dynamodb/?id=docs_gateway)
- [AWS Lambda](https://docs.aws.amazon.com/lambda/?id=docs_gateway)
- [AWS API Gateway](https://docs.aws.amazon.com/apigateway/?id=docs_gateway)
