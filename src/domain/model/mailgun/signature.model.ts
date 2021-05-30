import ISignature from "../../../domain/interfaces/mailgun/signature.interface";

export default class SignatureModel {
    private _timestamp: number | string;
    private _token: string;
    private _signature: string;

    constructor(signaturedata: ISignature) {
        this._timestamp = signaturedata["timestamp"];
        this._token = signaturedata["token"];
        this._signature = signaturedata["signature"];
    }

    /**
     * Set timestamp
     * @param value
     */
    setTimestamp(value: number|string): void {
        this._timestamp = value ? value : null;
    }

    /**
     * Get timestamp
     * @return {number|string|*}
     */
    getTimestamp(): number | string {
        return this._timestamp;
    }

    /**
     * Set token
     * @param value
     */
    setToken(value: string): void {
        this._token = value !== "" ? value : null;
    }

    /**
     * Get token
     * @return {string|*}
     */
    getToken(): string {
        return this._token;
    }

    /**
     * Set signature
     * @param value
     */
    setSignature(value: string): void {
        this._signature = value !== "" ? value : null;
    }

    /**
     * Get signature
     * @return {string|*}
     */
    getSignature(): string {
        return this._signature;
    }

    /**
     * Get signature entity mappings
     * @return {ISignature}
     */
    getEntityMappings(): ISignature {
        return {
            timestamp: this.getTimestamp(),
            token: this.getToken(),
            signature: this.getSignature(),
        };
    }
}
