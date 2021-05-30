import IFlags from "../../../domain/interfaces/mailgun/flags.interface";

export default class FlagsModel {
    private _isRouted: boolean;
    private _isAuthenticated: boolean;
    private _isSystemTest: boolean;
    private _isTestMode: boolean;

    constructor(flagsdata: IFlags) {
        this._isRouted = flagsdata["is-routed"];
        this._isAuthenticated = flagsdata["is-authenticated"];
        this._isSystemTest = flagsdata["is-system-test"];
        this._isTestMode = flagsdata["is-test-mode"];
    }

    /**
     * Set isRouted
     * @param value
     */
    setIsRouted(value: boolean): void {
        this._isRouted = (value !== undefined) ? value : null;
    }

    /**
     * Get isRouted
     * @return {boolean|*}
     */
    getIsRouted(): boolean {
        return this._isRouted;
    }

    /**
     * Set isAuthenticated
     * @param value
     */
    setisAuthenticated(value: boolean): void {
        this._isAuthenticated = (value !== undefined) ? value : null;
    }

    /**
     * Get isAuthenticated
     * @return {boolean|*}
     */
    getisAuthenticated(): boolean {
        return this._isAuthenticated;
    }

    /**
     * Set isSystemTest
     * @param value
     */
    setIsSystemTest(value: boolean): void {
        this._isSystemTest = (value !== undefined) ? value : null;
    }

    /**
     * Get isSystemTest
     * @return {boolean|*}
     */
    getIsSystemTest(): boolean {
        return this._isSystemTest;
    }

    /**
     * Set isTestMode
     * @param value
     */
    setIsTestMode(value: boolean): void {
        this._isTestMode = (value !== undefined) ? value : null;
    }

    /**
     * Get isTestMode
     * @return {boolean|*}
     */
    getIsTestMode(): boolean {
        return this._isTestMode;
    }

    /**
     * Get IFlags entity mappings
     * @return {IFlags}
     */
    getEntityMappings(): IFlags {
        return {
            "is-routed": this.getIsRouted(),
            "is-authenticated": this.getisAuthenticated(),
            "is-system-test": this.getIsSystemTest(),
            "is-test-mode": this.getIsTestMode(),
        };
    }
}
