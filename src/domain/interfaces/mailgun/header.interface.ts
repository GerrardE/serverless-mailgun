export default interface IHeader {
    host: string;
    "x-amzn-trace-id": string;
    "content-length": number;
    "content-type": string;
    "accept-encoding": string;
    accept: string;
    "user-agent": string;
}
