import * as chai from "chai";
import axios from "axios";
import { config } from "dotenv";

config();

const { expect } = chai;

const mockEvent = {
  "signature": {
    "timestamp": "1621701717",
    "token": "e7bd5bb6f6d42aa66eb07d13507765226ba68f853b39646ead",
    "signature": "9e46267b26d60aade2874d909952ba1375ed39ebe286bcc53308452265511adf"
  },
  "event-data": {
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
      "my_var_1": "Mailgun Variable #1",
      "my-var-2": "awesome"
    },
    "flags": {
      "is-routed": false,
      "is-authenticated": true,
      "is-system-test": false,
      "is-test-mode": false
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
  }
}

const BASE_URL = process.env.BASE_URL;

describe("MAILGUN EVENT TESTS", () => {
  let response, statusCode: number;

  before(async () => {
    try {
      const res = await axios.post(BASE_URL + "dev/event/create", mockEvent, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      statusCode = 200;
      response = res.data;

      return res
    } catch (error) {
      statusCode = error.response.statusCode;
      response = error.response.body;
      return error;
    }
  });

  it("should return a 200 status code", (done) => {
    expect(statusCode).to.eql(200);
    done();
  });

  it("should return success on save event", (done) => {
    expect(response.message).to.eql("Event item successfully saved");
    done();
  });

  it("It should return success if data exists in DynamoDB", async () => {
    setTimeout(() => { }, 1000);

    try {
      const res = await axios.post(BASE_URL + "dev/event/get", { id: response.data.id }, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      const data = res.data.data;

      expect(data.Item.id).to.eql(response.data.id);
      expect(data.Item.signature.timestamp).to.eql(mockEvent.signature.timestamp);
      expect(data.Item.signature.signature).to.eql(mockEvent.signature.signature);
      expect(data.Item.signature.token).to.eql(mockEvent.signature.token);
      expect(res.data.message).to.eql("Event item successfully retrieved");
    } catch (error) {
      expect(true).to.eql(false);
    };
  });
});
