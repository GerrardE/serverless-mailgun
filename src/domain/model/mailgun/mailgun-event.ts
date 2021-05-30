import IEventData from "../../../domain/interfaces/mailgun/event-data.interface";
import IMailgunEvent from "../../../domain/interfaces/mailgun/mailgun.interface";
import ISignature from "../../../domain/interfaces/mailgun/signature.interface";
import BaseModel from "../base.model";
import EventDataModel from "./event-data.model";
import SignatureModel from "./signature.model";

export default class MailgunEventModel extends BaseModel {
    private _eventData: IEventData;
    private _signature: ISignature;

    constructor(mailgundata: IMailgunEvent) {
        super();
        this._eventData = mailgundata["event-data"];
        this._signature = mailgundata["signature"];
    }

    /**
     * Set eventData
     * @param value
     */
    setEventData(value: IEventData): IEventData {
        return this._eventData = new EventDataModel(value).getEntityMappings();
    }

    /**
     * Get eventData
     * @return {IEventData|*}
     */
    getEventData(): IEventData {
        return this._eventData;
    }

    /**
     * Set signature
     * @param value
     */
    setSignature(value: ISignature): void {
        this._signature = new SignatureModel(value).getEntityMappings();
    }

    /**
     * Get signature
     * @return {ISignature|*}
     */
    getSignature(): ISignature {
        return this._signature;
    }

    /**
     * Get mailgun entity mappings
     * @return {IMailgunEvent}
     */
    getEntityMappings(): IMailgunEvent {
        return {
            id: this.getId(),
            signature: this.getSignature(),
            "event-data": this.getEventData(),
            createdAt: this.getCreatedAt(),
            updatedAt: this.getUpdatedAt(),
        };
    }
}
