import IHeaders from "./headers.interface";

export default interface IMessage {
    headers: IHeaders,
    attachments: unknown[];
    size: number;
}
