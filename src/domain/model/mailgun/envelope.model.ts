import IEnvelope from "../../../domain/interfaces/mailgun/envelope.interface";

export default class EnvelopeModel {
    private _transport: string;
    private _sender: string;
    private _sendingIp: string;
    private _targets: string;

    constructor(envelopedata: IEnvelope) {
        this._transport = envelopedata["transport"];
        this._sender = envelopedata["sender"];
        this._sendingIp = envelopedata["sending-ip"];
        this._targets = envelopedata["targets"];
    }

    /**
     * Set transport
     * @param value
     */
    setTransport(value: string): void {
        this._transport = value ? value : null;
    }

    /**
     * Get transport
     * @return {string|*}
     */
    getTransport(): string {
        return this._transport;
    }

    /**
     * Set sender
     * @param value
     */
    setSender(value: string): void {
        this._sender = value !== "" ? value : null;
    }

    /**
     * Get sender
     * @return {string|*}
     */
    getSender(): string {
        return this._sender;
    }

    /**
     * Set sendingIp
     * @param value
     */
    setSendingIp(value: string): void {
        this._sendingIp = value !== "" ? value : null;
    }

    /**
     * Get sendingIp
     * @return {string|*}
     */
    getSendingIp(): string {
        return this._sendingIp;
    }

    /**
     * Set targets
     * @param value
     */
    setTargets(value: string): void {
        this._targets = value !== "" ? value : null;
    }

    /**
     * Get targets
     * @return {string|*}
     */
    getTargets(): string {
        return this._targets;
    }

    /**
     * Get IEnvelope entity mappings
     * @return {IEnvelope}
     */
    getEntityMappings(): IEnvelope {
        return {
            transport: this.getTransport(),
            sender: this.getSender(),
            "sending-ip": this.getSendingIp(),
            targets: this.getTargets(),
        };
    }
}
