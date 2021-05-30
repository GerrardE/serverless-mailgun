import IClientInfo from "./clientinfo.interface";
import IDeliveryStatus from "./deliverystatus.interface";
import IEnvelope from "./envelope.interface";
import IFlags from "./flags.interface";
import IGeolocation from "./geolocation.interface";
import IMessage from "./message.interface";
import IStorage from "./storage.interface";
import IUserVariables from "./uservariables.interface";

export default interface IEventData {
    event: string,
    timestamp: string | number,
    id: string,
    recipient: string,
    "log-level": string,
    message: IMessage,
    tags: string[];
    storage: IStorage;
    envelope: IEnvelope;

    "recipient-domain": string;
    campaigns: unknown[];
    "user-variables": IUserVariables;
    flags: IFlags;
    "delivery-status": IDeliveryStatus;

    geolocation: IGeolocation;
    ip: string;
    "client-info": IClientInfo;

    severity: string;
    reason: string;
}
