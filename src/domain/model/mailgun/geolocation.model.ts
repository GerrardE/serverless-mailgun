import IGeolocation from "../../../domain/interfaces/mailgun/geolocation.interface";

export default class GeolocationModel {
    private _country: string;
    private _region: string;
    private _city: string;

    constructor({
        country = "",
        region = "",
        city = "",
    }: IGeolocation) {
        this._country = country;
        this._region = region;
        this._city = city;
    }

    /**
     * Set country
     * @param value
     */
    setCountry(value: string): void {
        this._country = (value !== "") ? value : null;
    }

    /**
     * Get country
     * @return {string|*}
     */
    getCountry(): string {
        return this._country;
    }

    /**
     * Set region
     * @param value
     */
    setRegion(value: string): void {
        this._region = (value !== undefined) ? value : null;
    }

    /**
     * Get region
     * @return {string|*}
     */
    getRegion(): string {
        return this._region;
    }

    /**
     * Set city
     * @param value
     */
    setCity(value: string): void {
        this._city = (value !== undefined) ? value : null;
    }

    /**
     * Get city
     * @return {string|*}
     */
    getCity(): string {
        return this._city;
    }

    /**
     * Get IGeolocation entity mappings
     * @return {IGeolocation}
     */
    getEntityMappings(): IGeolocation {
        return {
            country: this.getCountry(),
            region: this.getRegion(),
            city: this.getCity(),
        };
    }
}
