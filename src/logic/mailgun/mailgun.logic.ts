import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
} from "aws-lambda";
import DynamoDBData from "../../data/dynamodb.data";
import MailgunEventModel from "../../domain/model/mailgun/mailgun-event";
import ResponseModel from "../../domain/model/response.model";
import SNSLogic from "../notification/sns.logic";
import isMailgunEvent from "./validator";

export default class MailgunLogic {
  async createEvent(
    event: APIGatewayProxyEvent
  ): Promise<APIGatewayProxyResult> {
    let response;

    if (event.headers["Content-Type"] !== "application/json") {
      response = new ResponseModel(
        {},
        406,
        "Not accepted"
      );

      return response.generate();
    }

    const { NOTIFICATION_PROVIDER, SNS_ARN } = process.env;

    const database = new DynamoDBData();

    const snsservice = new SNSLogic();

    const mailgunEventModel = new MailgunEventModel(JSON.parse(event.body));

    const data = mailgunEventModel.getEntityMappings();

    const eventitem = {
      TableName: process.env.EVENT_TABLE,
      Item: {
        id: data.id,
        signature: data.signature,
        "event-data": data["event-data"],
        createdAt: data.createdAt,
        updatedAt: data.createdAt,
      },
    };

    if (!isMailgunEvent(data.signature)) {
      response = new ResponseModel(
        {},
        406,
        "Invalid signature"
      );

      return response.generate();
    }

    try {
      await database.create(eventitem);

      response = new ResponseModel(
        { id: data.id },
        200,
        "Event item successfully saved"
      );

      const params = {
        Subject: "A new notification from " + NOTIFICATION_PROVIDER,
        Message: JSON.stringify({
          Provider: NOTIFICATION_PROVIDER,
          timestamp: JSON.stringify(data.createdAt),
          type: data["event-data"].event,
        }),
        TopicArn: SNS_ARN
      };

      snsservice.send(params);

      return response.generate();
    } catch (error) {
      response =
        error instanceof ResponseModel
          ? error
          : new ResponseModel(error, 500, "Event item could not be saved");

      return response.generate();
    }
  }

  async getEvent(
    event: APIGatewayProxyEvent
  ): Promise<APIGatewayProxyResult> {
    const database = new DynamoDBData()

    let response;

    try {

      const data = await database.get({ Key: JSON.parse(event.body), TableName: process.env.EVENT_TABLE });

      response = new ResponseModel(
        data,
        200,
        "Event item successfully retrieved"
      );

      return response.generate();
    } catch (error) {
      response =
        error instanceof ResponseModel
          ? error
          : new ResponseModel({}, 500, "Event item could not be retrieved");

      return response.generate();
    }
  }
}

export const { createEvent, getEvent } = new MailgunLogic();
