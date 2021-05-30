import IUserVariables from "../../../domain/interfaces/mailgun/uservariables.interface";

export default class UserVariablesModel {
    private _myvar1: string | number;
    private _myvar2: string| number;

    constructor(uservariabledata: IUserVariables) {
        this._myvar1 = uservariabledata["my_var_1"];
        this._myvar2 = uservariabledata["my-var-2"];
    }

    /**
     * Set myvar1
     * @param value
     */
    setMyVar1(value: string): void {
        this._myvar1 = value ? value : null;
    }

    /**
     * Get myvar1
     * @return {string | number|*}
     */
    getMyVar1(): string | number {
        return this._myvar1;
    }

    /**
     * Set myvar2
     * @param value
     */
    setMyVar2(value: string): void {
        this._myvar2 = value !== "" ? value : null;
    }

    /**
     * Get myvar2
     * @return {string | number |*}
     */
    getMyVar2(): string | number {
        return this._myvar2;
    }

    /**
     * Get UserVariables entity mappings
     * @return {IUserVariables}
     */
    getEntityMappings(): IUserVariables {
        return {
            "my_var_1": this.getMyVar1(),
            "my-var-2": this.getMyVar2(),
        };
    }
}
