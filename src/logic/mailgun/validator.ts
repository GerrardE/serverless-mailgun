import crypto from "crypto";
import ISignature from "../../domain/interfaces/mailgun/signature.interface";

const isMailgunEvent = (signature: ISignature): boolean => {
    if (crypto.createHmac("sha256", process.env.MAILGUN_API_KEY).update(signature.timestamp + signature.token).digest("hex") === signature.signature) {
        return true;
    }

    return false;
}

export default isMailgunEvent;
