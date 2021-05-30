import IHeaders from "../../../domain/interfaces/mailgun/headers.interface";
import IMessage from "../../../domain/interfaces/mailgun/message.interface";
import HeadersModel from "./headers.model";

export default class MessageModel {
    private _headers: IHeaders;
    private _attachments: unknown[];
    private _size: number;

    constructor(messagedata: IMessage) {
        this._headers = messagedata["headers"];
        this._attachments = messagedata["attachments"];
        this._size = messagedata["size"];
    }

    /**
     * Set headers
     * @param value
     */
    setHeaders(value: IHeaders): void {
        this._headers = new HeadersModel(value).getEntityMappings();
    }

    /**
     * Get headers
     * @return {IHeaders|*}
     */
    getHeaders(): IHeaders {
        return this._headers;
    }

    /**
     * Set attachments
     * @param value
     */
    setAttachments(value: unknown[]): void {
        this._attachments = (value !== undefined) ? value : null;
    }

    /**
     * Get attachments
     * @return {unknown[]|*}
     */
    getAttachments(): unknown[] {
        return this._attachments;
    }

    /**
     * Set size
     * @param value
     */
    setSize(value: number): void {
        this._size = (value !== undefined) ? value : null;
    }

    /**
     * Get size
     * @return {number|*}
     */
    getSize(): number {
        return this._size;
    }

    /**
     * Get IMessage entity mappings
     * @return {IMessage}
     */
    getEntityMappings(): IMessage {
        return {
            headers: this.getHeaders(),
            attachments: this.getAttachments(),
            size: this.getSize(),
        };
    }
}
