import IStorage from "../../../domain/interfaces/mailgun/storage.interface";

export default class StorageModel {
    private _url: string;
    private _key: string;

    constructor({
        url,
        key,
    }: IStorage) {
        this._url = url;
        this._key = key;
    }

    /**
     * Set url
     * @param value
     */
    setUrl(value: string): void {
        this._url = value ? value : null;
    }

    /**
     * Get url
     * @return {string|*}
     */
    getUrl(): string {
        return this._url;
    }

    /**
     * Set key
     * @param value
     */
    setKey(value: string): void {
        this._key = value !== "" ? value : null;
    }

    /**
     * Get key
     * @retUrn {string|*}
     */
    getKey(): string {
        return this._key;
    }

    /**
     * Get storage entity mappings
     * @return {IStorage}
     */
    getEntityMappings(): IStorage {
        return {
            url: this.getUrl(),
            key: this.getKey(),
        };
    }
}
