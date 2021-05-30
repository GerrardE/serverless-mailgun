export default interface IDeliveryStatus {
    tls: boolean;
    "mx-host": string;
    "attempt-no": number;
    description: string;
    "session-seconds": number;
    utf8: boolean;
    code: number;
    "retry-seconds": number;
    message: string;
    "certificate-verified": boolean;
}
