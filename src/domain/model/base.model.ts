import IBaseInterface from "../interfaces/base.interface";
import { v4 } from "uuid";

export default class BaseModel {
    private _id: string;
    private _createdAt: number;
    private _updatedAt: number;

    constructor(){
        this._id = v4();
        this._createdAt = new Date().getTime();
        this._updatedAt = new Date().getTime()
    }

    /**
     * Get id
     * @return {string|*}
     */
    getId(): string {
        return this._id;
    }

    /**
     * Get createdAt
     * @return {number}
     */
    getCreatedAt(): number {
        return this._createdAt;
    }

    /**
     * Get updatedAt
     * @return {number}
     */
    getUpdatedAt(): number {
        return this._updatedAt;
    }

    
    /**
     * Get Base entity mappings
     * @return {IBaseInterface}
     */
    getBaseEntityMappings(): IBaseInterface {
        return {
            id: this.getId(),
            createdAt: this.getCreatedAt(),
            updatedAt: this.getCreatedAt(),
        };
    }
}
