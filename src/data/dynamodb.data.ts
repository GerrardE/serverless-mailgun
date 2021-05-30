import { DynamoDB, config } from "aws-sdk";
import IConfig from "../domain/interfaces/config.interface";
import IDatabase from "../domain/interfaces/services/database.interface";
import ResponseModel from "../domain/model/response.model";

const {
    STAGE,
    DYNAMODB_LOCAL_STAGE,
    ACCESS_KEY_ID,
    SECRET_ACCESS_KEY,
    DYNAMODB_LOCAL_ENDPOINT,
    REGION,
} = process.env;

const configuration: IConfig = { region: REGION };

if (STAGE === DYNAMODB_LOCAL_STAGE) {
    configuration.accessKeyId = ACCESS_KEY_ID;
    configuration.secretAccessKey = SECRET_ACCESS_KEY;
    configuration.endpoint = DYNAMODB_LOCAL_ENDPOINT;
}

config.update(configuration);

const documentClient = new DynamoDB.DocumentClient();

export default class DynamoDBData implements IDatabase {
    create = async (data: DynamoDB.DocumentClient.PutItemInput): Promise<DynamoDB.DocumentClient.PutItemOutput> => {
        try {
            return documentClient.put(data).promise();
        } catch (error) {
            throw new ResponseModel({}, 500, `create-error: ${error}`);
        }
    }

    get = async (data: DynamoDB.DocumentClient.GetItemInput): Promise<DynamoDB.DocumentClient.PutItemOutput> => {
        try {
            return documentClient.get(data).promise();
        } catch (error) {
            throw new ResponseModel({}, 500, `get-error: ${error}`);
        }
    }
}
