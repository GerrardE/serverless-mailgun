import { status } from "../../domain/enum/status.enum";
import { IResponse, IResponseBody, ResponseHeader } from "../../domain/interfaces/response.interface";

const messages = {
    200: status.success,
    400: status.badrequest,
    500: status.error,
}

const responseHeaders: ResponseHeader = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
};

/**
 * class ResponseModel
 */
export default class ResponseModel {
    private body: IResponseBody;
    private code: number;

    /**
     * ResponseModel constructor
     * @param data
     * @param code
     * @param message
     */
    constructor(data = {}, code = 400, message = "") {
        this.body = {
            data: data,
            message: message,
            status: messages[code],
        };
        this.code = code;
    }

    /**
     * Add/update body item
     * @param key
     * @param value
     */
    setBody = (key: string, value: string): void => {
        this.body[key] = value;
    }

    /**
     * Set Data
     * @param data
     */
    setData = (data: unknown): void => {
        this.body.data = data;
    }

    /**
     * Set code
     * @param code
     */
    setCode = (code: number): void => {
        this.code = code;
    }

    /**
     * Get code
     * @return {*}
     */
    getCode = (): number => {
        return this.code;
    }

    /**
     * Set message
     * @param message
     */
    setMessage = (message: string): void => {
        this.body.message = message;
    }

    /**
     * Get Message
     * @return {string|*}
     */
    getMessage = (): unknown => {
        return this.body.message;
    }

    /**
     * Return response
     * @return {IResponse}
     */
    generate = (): IResponse => {
        return {
            "statusCode": this.code,
            "headers": responseHeaders,
            "body": JSON.stringify(this.body),
            "isBase64Encoded": false,
        };
    }
}
