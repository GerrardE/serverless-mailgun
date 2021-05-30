export default interface IEnvelope {
    transport: string;
    sender: string;
    "sending-ip": string;
    targets: string;
}
