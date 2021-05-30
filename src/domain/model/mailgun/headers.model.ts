import IHeaders from "../../../domain/interfaces/mailgun/headers.interface";

export default class HeadersModel {
    private _to: string;
    private _from: string;
    private _subject: string;
    private _messageId: string;

    constructor(headersdata: IHeaders) {
        this._to = headersdata["to"];
        this._from = headersdata["from"];
        this._subject = headersdata["subject"];
        this._messageId = headersdata["message-id"];
    }

    /**
     * Set to
     * @param value
     */
    setTo(value: string): void {
        this._to = value ? value : null;
    }

    /**
     * Get to
     * @return {string|*}
     */
    getTo(): string {
        return this._to;
    }

    /**
     * Set from
     * @param value
     */
    setFrom(value: string): void {
        this._from = value !== "" ? value : null;
    }

    /**
     * Get from
     * @return {string|*}
     */
    getFrom(): string {
        return this._from;
    }

    /**
     * Set subject
     * @param value
     */
    setSubject(value: string): void {
        this._subject = value !== "" ? value : null;
    }

    /**
     * Get subject
     * @return {string|*}
     */
    getSubject(): string {
        return this._subject;
    }

    /**
     * Set messageId
     * @param value
     */
    setMessageId(value: string): void {
        this._messageId = value !== "" ? value : null;
    }

    /**
     * Get messageId
     * @return {string|*}
     */
    getMessageId(): string {
        return this._messageId;
    }

    /**
     * Get IHeaders entity mappings
     * @return {IHeaders}
     */
    getEntityMappings(): IHeaders {
        return {
            to: this.getTo(),
            from: this.getFrom(),
            subject: this.getSubject(),
            "message-id": this.getMessageId(),
        };
    }
}
