import { AWSError, SNS } from "aws-sdk";
import INotificationService from "../../domain/interfaces/services/notification.interface";
import ResponseModel from "../../domain/model/response.model";

export default class SNSLogic implements INotificationService {
    send(input: SNS.Types.PublishInput): void {
        const sns = new SNS();

        sns.publish(input, (err: AWSError, data: SNS.Types.PublishResponse) => {
            if (err) {
                console.log(new ResponseModel({}, 500, "Notification not sent"));
            } else {
                console.log(new ResponseModel(data, 200, "Notification sent successfully"));
            }
        });
    }
}
