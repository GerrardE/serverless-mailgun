import IHeader from "../../../domain/interfaces/mailgun/header.interface";

export default class HeaderModel {
    private _host: string;
    private _xAmznTraceId: string;
    private _contentLength: number;
    private _contentType: string;
    private _acceptEncoding: string;
    private _accept: string;
    private _userAgent: string;

    constructor(hearderdata: IHeader) {
        this._host = hearderdata["host"];
        this._xAmznTraceId = hearderdata["x-amzn-trace-id"];
        this._contentLength = hearderdata["content-length"];
        this._contentType = hearderdata["content-type"];
        this._acceptEncoding = hearderdata["accept-encoding"];
        this._accept = hearderdata["accept"];
        this._userAgent = hearderdata["user-agent"];
    }

    /**
     * Set host
     * @param value
     */
    setHost(value: string): void {
        this._host = value ? value : null;
    }

    /**
     * Get host
     * @return {string|*}
     */
    getHost(): string {
        return this._host;
    }

    /**
     * Set xAmznTraceId
     * @param value
     */
    setXAmznTraceId(value: string): void {
        this._xAmznTraceId = value !== "" ? value : null;
    }

    /**
     * Get xAmznTraceId
     * @return {string|*}
     */
    getXAmznTraceId(): string {
        return this._xAmznTraceId;
    }

    /**
     * Set contentLength
     * @param value
     */
    setContentLength(value: number): void {
        this._contentLength = (value !== undefined) ? value : null;
    }

    /**
     * Get contentLength
     * @return {number|*}
     */
    getContentLength(): number {
        return this._contentLength;
    }

    /**
     * Set contentType
     * @param value
     */
    setContentType(value: string): void {
        this._contentType = value !== "" ? value : null;
    }

    /**
     * Get contentType
     * @return {string|*}
     */
    getContentType(): string {
        return this._contentType;
    }

    /**
     * Set acceptEncoding
     * @param value
     */
    setAcceptEncoding(value: string): void {
        this._acceptEncoding = value !== "" ? value : null;
    }

    /**
     * Get acceptEncoding
     * @return {string|*}
     */
    getAcceptEncoding(): string {
        return this._acceptEncoding;
    }

    /**
     * Set accept
     * @param value
     */
    setAccept(value: string): void {
        this._accept = value !== "" ? value : null;
    }

    /**
     * Get accept
     * @return {string|*}
     */
    getAccept(): string {
        return this._accept;
    }

    /**
     * Set userAgent
     * @param value
     */
    setUserAgent(value: string): void {
        this._userAgent = value !== "" ? value : null;
    }

    /**
     * Get userAgent
     * @return {string|*}
     */
    getUserAgent(): string {
        return this._userAgent;
    }

    /**
     * Get IHeader entity mappings
     * @return {IHeader}
     */
    getEntityMappings(): IHeader {
        return {
            host: this.getHost(),
            "x-amzn-trace-id": this.getXAmznTraceId(),
            "content-length": this.getContentLength(),
            "content-type": this.getContentType(),
            "accept-encoding": this.getAcceptEncoding(),
            accept: this.getAccept(),
            "user-agent": this.getUserAgent(),
        };
    }
}
