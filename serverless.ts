import type { AWS } from "@serverless/typescript";
import functions from "./resources/functions";
import dynamoDbTables from "./resources/dynamodb-tables";

const serverlessConfiguration: AWS = {
  service: "serverless-mailgun",
  frameworkVersion: "2",
  custom: {
    region: "${opt:region, self:provider.region}",
    stage: "${opt:stage, self:provider.stage}",
    prefix: "${self:service}-${self:custom.stage}",
    event_table: "${self:service}-event-table-${opt:stage, self:provider.stage}",
    table_throughputs: {
      prod: 5,
      default: 1,
    },
    table_throughput: "${self:custom.table_throughputs.${self:custom.stage}, self:custom.table_throughputs.default}",
    dynamodb: {
      stages: ["dev"],
      start: {
        port: 8008,
        inMemory: true,
        heapInitial: "200m",
        heapMax: "1g",
        migrate: true,
        seed: true,
        convertEmptyValues: true,
      }
    },
    ["serverless-offline"]: {
      httpPort: 3000,
      babelOptions: {
        presets: ["env"]
      }
    }
  },
  plugins: [
    "serverless-dynamodb-local",
    "serverless-offline",
    "serverless-bundle",
    "serverless-dotenv-plugin",
  ],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    stage: "dev",
    region: "us-east-1",
    memorySize: 512,
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      REGION: "${self:custom.region}",
      STAGE: "${self:custom.stage}",
      EVENT_TABLE: "${self:custom.event_table}",
    },
    iamRoleStatements: [
      {
        Effect: "Allow",
        Action: [
          "dynamodb:DescribeTable",
          "dynamodb:Query",
          "dynamodb:Scan",
          "dynamodb:GetItem",
          "dynamodb:PutItem",
          "dynamodb:UpdateItem",
          "dynamodb:DeleteItem",
        ],
        Resource: [
          { "Fn::GetAtt": ["EventTable", "Arn"] },
        ]
      },
      {
        Effect: "Allow",
        Action: [
          "sns:Publish",
          "sns:Subscribe",
        ],
        Resource: "*"
      }
    ],
    lambdaHashingVersion: "20201221",
  },
  resources: {
    Resources: dynamoDbTables,
  },
  // import the function via paths
  functions: functions,
  package: {
    individually: true,
  },
  useDotenv: true,
};

module.exports = serverlessConfiguration;
