import IEventData from "./event-data.interface";
import ISignature from "./signature.interface";

export default interface IMailgunEvent {
    id?:string,
    signature: ISignature,
    "event-data": IEventData,
    createdAt?: number,
    updatedAt?: number,
}
