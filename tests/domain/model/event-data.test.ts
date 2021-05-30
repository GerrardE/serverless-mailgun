import * as chai from "chai";
import EventDataModel from "../../../src/domain/model/mailgun/event-data.model";

const mockEventData = {
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
};

const expect = chai.expect;

describe("Uservariables model tests", () => {
  describe("It should get/set correct values", () => {
    const eventDataModel = new EventDataModel(mockEventData);
    
    it("It should get/set the event", () => {
        eventDataModel.setEvent(mockEventData["event"]);
        expect(eventDataModel.getEvent()).to.eql(mockEventData["event"]);
    });

    it("It should get/set the timestamp", () => {
        eventDataModel.setTimestamp(mockEventData["timestamp"]);
        expect(eventDataModel.getTimestamp()).to.eql(mockEventData["timestamp"]);
    });

    it("It should get/set the id", () => {
        eventDataModel.setId(mockEventData["id"]);
        expect(eventDataModel.getId()).to.eql(mockEventData["id"]);
    });

    it("It should get/set the recipient", () => {
        eventDataModel.setRecipient(mockEventData["recipient"]);
        expect(eventDataModel.getRecipient()).to.eql(mockEventData["recipient"]);
    });

    it("It should get/set the log-level", () => {
        eventDataModel.setLogLevel(mockEventData["log-level"]);
        expect(eventDataModel.getLogLevel()).to.eql(mockEventData["log-level"]);
    });

    it("It should get/set the message", () => {
        eventDataModel.setMessage(mockEventData["message"]);
        expect(eventDataModel.getMessage()).to.eql(mockEventData["message"]);
    });

    it("It should get/set the tags", () => {
        eventDataModel.setTags(mockEventData["tags"]);
        expect(eventDataModel.getTags()).to.eql(mockEventData["tags"]);
    });

    it("It should get/set the storage", () => {
        eventDataModel.setStorage(mockEventData["storage"]);
        expect(eventDataModel.getStorage()).to.eql(mockEventData["storage"]);
    });

    it("It should get/set the envelope", () => {
        eventDataModel.setEnvelope(mockEventData["envelope"]);
        expect(eventDataModel.getEnvelope()).to.eql(mockEventData["envelope"]);
    });

    it("It should get/set the recipient-domain", () => {
        eventDataModel.setRecipientDomain(mockEventData["recipient-domain"]);
        expect(eventDataModel.getRecipientDomain()).to.eql(mockEventData["recipient-domain"]);
    });

    it("It should get/set the campaigns", () => {
        eventDataModel.setCampaigns(mockEventData["campaigns"]);
        expect(eventDataModel.getCampaigns()).to.eql(mockEventData["campaigns"]);
    });

    it("It should get/set the flags", () => {
        eventDataModel.setFlags(mockEventData["flags"]);
        expect(eventDataModel.getFlags()).to.eql(mockEventData["flags"]);
    });

    it("It should get/set the delivery-status", () => {
        eventDataModel.setDeliveryStatus(mockEventData["delivery-status"]);
        expect(eventDataModel.getDeliveryStatus()).to.eql(mockEventData["delivery-status"]);
    });

    it("It should get/set the geolocation", () => {
        eventDataModel.setGeolocation(mockEventData["geolocation"]);
        expect(eventDataModel.getGeolocation()).to.eql(mockEventData["geolocation"]);
    });

    it("It should get/set the ip", () => {
        eventDataModel.setIp(mockEventData["ip"]);
        expect(eventDataModel.getIp()).to.eql(mockEventData["ip"]);
    });

    it("It should get/set the client-info", () => {
        eventDataModel.setClientInfo(mockEventData["client-info"]);
        expect(eventDataModel.getClientInfo()).to.eql(mockEventData["client-info"]);
    });

    it("It should get/set the severity", () => {
        eventDataModel.setSeverity(mockEventData["severity"]);
        expect(eventDataModel.getSeverity()).to.eql(mockEventData["severity"]);
    });

    it("It should get/set the reason", () => {
        eventDataModel.setReason(mockEventData["reason"]);
        expect(eventDataModel.getReason()).to.eql(mockEventData["reason"]);
    });
  });

  describe("It should correctly map the entities", () => {
    it("It should return an object with correct entity values", () => {
      const eventDataModel = new EventDataModel(mockEventData);

      expect(eventDataModel.getEntityMappings()).to.eql({
        event: mockEventData["event"],
        timestamp: mockEventData["timestamp"],
        id: mockEventData["id"],
        recipient: mockEventData["recipient"],
        "log-level": mockEventData["log-level"],
        message: mockEventData["message"],
        tags: mockEventData["tags"],
        storage: mockEventData["storage"],
        envelope: mockEventData["envelope"],
  
        "recipient-domain": mockEventData["recipient-domain"],
        campaigns: mockEventData["campaigns"],
        "user-variables": mockEventData["user-variables"],
        flags: mockEventData["flags"],
        "delivery-status": mockEventData["delivery-status"],
  
        geolocation: mockEventData["geolocation"],
        ip: mockEventData["ip"],
        "client-info": mockEventData["client-info"],
  
        severity: mockEventData["severity"],
        reason: mockEventData["reason"],
      });
    });
  });
});
