import IDeliveryStatus from "src/domain/interfaces/mailgun/deliverystatus.interface";

export default class DeliveryStatusModel {
    private _tls: boolean;
    private _mxHost: string;
    private _attemptNo: number;
    private _description: string;
    private _sessionSeconds: number;
    private _utf8: boolean;
    private _retrySeconds: number;
    private _code: number;
    private _message: string;
    private _certificateVerified: boolean;

    constructor(deliverystatus: IDeliveryStatus) {
        this._tls = deliverystatus["tls"];
        this._mxHost = deliverystatus["mx-host"];
        this._attemptNo = deliverystatus["attempt-no"];
        this._description = deliverystatus["description"];
        this._sessionSeconds = deliverystatus["session-seconds"];
        this._utf8 = deliverystatus["utf8"];
        this._code = deliverystatus["code"];
        this._retrySeconds = deliverystatus["retry-seconds"];
        this._message = deliverystatus["message"];
        this._certificateVerified = deliverystatus["certificate-verified"]
    }

    /**
     * Set tls
     * @param value
     */
    setTls(value: boolean): void {
        this._tls = (value !== undefined) ? value : null;
    }

    /**
     * Get tls
     * @return {boolean|*}
     */
    getTls(): boolean {
        return this._tls;
    }

    /**
     * Set mxHost
     * @param value
     */
    setMxHost(value: string): void {
        this._mxHost = value !== "" ? value : null;
    }

    /**
     * Get mxHost
     * @return {string|*}
     */
    getMxHost(): string {
        return this._mxHost;
    }

    /**
     * Set attemptNo
     * @param value
     */
    setAttemptNo(value: number): void {
        this._attemptNo = (value !== undefined) ? value : null;
    }

    /**
     * Get attemptNo
     * @return {number|*}
     */
    getAttemptNo(): number {
        return this._attemptNo;
    }

    /**
     * Set description
     * @param value
     */
    setDescription(value: string): void {
        this._description = value !== "" ? value : null;
    }

    /**
     * Get description
     * @return {string|*}
     */
    getDescription(): string {
        return this._description;
    }

    /**
     * Set sessionseconds
     * @param value
     */
    setSessionSeconds(value: number): void {
        this._sessionSeconds = (value !== undefined) ? value : null;
    }

    /**
     * Get sessionseconds
     * @return {number|*}
     */
    getSessionSeconds(): number {
        return this._sessionSeconds;
    }

    /**
     * Set retryseconds
     * @param value
     */
    setRetrySeconds(value: number): void {
        this._retrySeconds = (value !== undefined) ? value : null;
    }

    /**
     * Get retryseconds
     * @return {number|*}
     */
    getRetrySeconds(): number {
        return this._retrySeconds;
    }

    /**
     * Set utf8
     * @param value
     */
    setUtf8(value: boolean): void {
        this._utf8 = (value !== undefined) ? value : null;
    }

    /**
     * Get utf8
     * @return {boolean|*}
     */
    getUtf8(): boolean {
        return this._utf8;
    }

    /**
     * Set code
     * @param value
     */
    setCode(value: number): void {
        this._code = (value !== undefined) ? value : null;
    }

    /**
     * Get code
     * @return {number|*}
     */
    getCode(): number {
        return this._code;
    }

    /**
     * Set message
     * @param value
     */
    setMessage(value: string): void {
        this._message = value !== "" ? value : null;
    }

    /**
     * Get message
     * @return {string|*}
     */
    getMessage(): string {
        return this._message;
    }

    /**
     * Set CertificateVerified
     * @param value
     */
    setCertificateVerified(value: boolean): void {
        this._certificateVerified = (value !== undefined) ? value : null;
    }

    /**
     * Get CertificateVerified
     * @return {boolean|*}
     */
    getCertificateVerified(): boolean {
        return this._certificateVerified;
    }

    /**
     * Get IDeliveryStatus entity mappings
     * @return {IDeliveryStatus}
     */
    getEntityMappings(): IDeliveryStatus {
        return {
            tls: this.getTls(),
            "mx-host": this.getMxHost(),
            "attempt-no": this.getAttemptNo(),
            description: this.getDescription(),
            "session-seconds": this.getSessionSeconds(),
            utf8: this.getUtf8(),
            code: this.getCode(),
            "retry-seconds": this.getRetrySeconds(),
            message: this.getMessage(),
            "certificate-verified": this.getCertificateVerified(),
        };
    }
}
