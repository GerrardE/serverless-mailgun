export type ResponseHeader = { [header: string]: string | number | boolean; }

export interface IResponseBody {
    data: unknown;
    message: string;
    status?: string;
}

export interface IResponse {
    statusCode: number;
    headers: ResponseHeader;
    body: string;
    isBase64Encoded: boolean
}
