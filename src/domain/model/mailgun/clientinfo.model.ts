import IClientInfo from "../../../domain/interfaces/mailgun/clientinfo.interface";

export default class ClientInfoModel {
    private _clientOs: string;
    private _deviceType: string;
    private _clientName: string;
    private _clientType: string;
    private _userAgent: string;

    constructor(clientinfodata: IClientInfo) {
        this._clientOs = clientinfodata["client-os"];
        this._deviceType = clientinfodata["device-type"];
        this._clientName = clientinfodata["client-name"];
        this._clientType = clientinfodata["client-type"];
        this._userAgent = clientinfodata["user-agent"];
    }

    /**
     * Set clientOs
     * @param value
     */
    setClientOs(value: string): void {
        this._clientOs = value ? value : null;
    }

    /**
     * Get clientOs
     * @return {string|*}
     */
    getClientOs(): string {
        return this._clientOs;
    }

    /**
     * Set deviceType
     * @param value
     */
    setDeviceType(value: string): void {
        this._deviceType = value !== "" ? value : null;
    }

    /**
     * Get deviceType
     * @return {string|*}
     */
    getDeviceType(): string {
        return this._deviceType;
    }

    /**
     * Set clientName
     * @param value
     */
    setClientName(value: string): void {
        this._clientName = value !== "" ? value : null;
    }

    /**
     * Get clientName
     * @return {string|*}
     */
    getClientName(): string {
        return this._clientName;
    }

    /**
     * Set clientType
     * @param value
     */
    setClientType(value: string): void {
        this._clientType = value !== "" ? value : null;
    }

    /**
     * Get clientType
     * @return {string|*}
     */
    getClientType(): string {
        return this._clientType;
    }

    /**
     * Set userAgent
     * @param value
     */
    setuserAgent(value: string): void {
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
     * Get ClientInfo entity mappings
     * @return {IClientInfo}
     */
    getEntityMappings(): IClientInfo {
        return {
            "client-os": this.getClientOs(),
            "device-type": this.getDeviceType(),
            "client-name": this.getClientName(),
            "client-type": this.getClientType(),
            "user-agent": this.getUserAgent(),
        };
    }
}
