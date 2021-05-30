import * as chai from "chai";
import MailgunEventModel from "../../../src/domain/model/mailgun/mailgun-event";

const mockMailgunEvent = {
    signature: {
        timestamp: "1621701717",
        token: "e7bd5bb6f6d42aa66eb07d13507765226ba68f853b39646ead",
        signature: "9e46267b26d60aade2874d909952ba1375ed39ebe286bcc53308452265511adf"
    },
    "event-data": {
        "ip": "50.56.129.169",
        "geolocation": {
            "country": "US",
            "region": "CA",
            "city": "San Francisco"
        },
        "severity": "temporary",
        "tags": [
            "my_tag_1",
            "my_tag_2"
        ],
        "timestamp": 1521472262.908181,
        "storage": {
            "url": "https://se.api.mailgun.net/v3/domains/sandbox5eefc36737c54ad8a95c7125a83a76ca.mailgun.org/messages/message_key",
            "key": "message_key"
        },
        "log-level": "warn",
        "id": "Fs7-5t81S2ispqxqDw2U4Q",
        "campaigns": [],
        "reason": "generic",
        "user-variables": {
            "event": "Mailgun Variable #1",
            "my-var-2": "awesome"
        },
        "flags": {
            "is-routed": false,
            "is-authenticated": true,
            "is-system-test": false,
            "is-test-mode": false
        },
        "client-info": {
            "client-os": "Linux",
            "device-type": "desktop",
            "client-name": "Chrome",
            "client-type": "browser",
            "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.43 Safari/537.31"
        },
        "recipient-domain": "example.com",
        "envelope": {
            "transport": "smtp",
            "sender": "bob@sandbox5eefc36737c54ad8a95c7125a83a76ca.mailgun.org",
            "sending-ip": "209.61.154.250",
            "targets": "alice@example.com"
        },
        "message": {
            "headers": {
                "to": "Alice <alice@example.com>",
                "message-id": "20130503182626.18666.16540@sandbox5eefc36737c54ad8a95c7125a83a76ca.mailgun.org",
                "from": "Bob <bob@sandbox5eefc36737c54ad8a95c7125a83a76ca.mailgun.org>",
                "subject": "Test delivered webhook"
            },
            "attachments": [],
            "size": 111
        },
        "recipient": "alice@example.com",
        "event": "failed",
        "delivery-status": {
            "tls": true,
            "mx-host": "smtp-in.example.com",
            "attempt-no": 1,
            "description": "",
            "session-seconds": 0.1281740665435791,
            "utf8": true,
            "retry-seconds": 600,
            "code": 452,
            "message": "4.2.2 The email account that you tried to reach is over quota. Please direct\n4.2.2 the recipient to\n4.2.2  https://support.example.com/mail/?p=422",
            "certificate-verified": true
        }
    },
}

const expect = chai.expect;

describe("MailgunEventModel tests", () => {
    describe("It should get/set variables", () => {
        const envelopeModel = new MailgunEventModel(mockMailgunEvent);

        it("It should get/set the event-data", () => {
            envelopeModel.setEventData(mockMailgunEvent["event-data"]);
            expect(envelopeModel.getEventData()).to.eql(mockMailgunEvent["event-data"]);
        });

        it("It should get/set the signature", () => {
            envelopeModel.setSignature(mockMailgunEvent["signature"]);
            expect(envelopeModel.getSignature()).to.eql(mockMailgunEvent["signature"]);
        });
    });
})
