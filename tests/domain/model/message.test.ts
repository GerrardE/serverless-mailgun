import * as chai from "chai";
import MessageModel from "../../../src/domain/model/mailgun/message.model";

const mockMessage = {
    headers: {
        to: "Alice <alice@example.com>",
        from: "Bob <bob@sandbox5eefc36737c54ad8a95c7125a83a76ca.mailgun.org>",
        subject: "Test delivered webhook",
        "message-id": "20130503182626.18666.16540@sandbox5eefc36737c54ad8a95c7125a83a76ca.mailgun.org",
    },
    attachments: ["cc"],
    size: 111
}

const expect = chai.expect;

describe("Message model tests", () => {
    describe("It should get/set variables", () => {
        const messageModel = new MessageModel(mockMessage);

        it("It should get the headers", () => {
            messageModel.setHeaders(mockMessage["headers"]);
            expect(messageModel.getHeaders()).to.eql(mockMessage["headers"]);
        });

        it("It should get the attachments", () => {
            messageModel.setAttachments(mockMessage["attachments"]);
            expect(messageModel.getAttachments()).to.equal(mockMessage["attachments"]);
        });

        it("It should get the size", () => {
            messageModel.setSize(mockMessage["size"]);
            expect(messageModel.getSize()).to.equal(mockMessage["size"]);
        });
    });

    describe("It should correctly map the entities", () => {
        const messageModel = new MessageModel(mockMessage);
    
        expect(messageModel.getEntityMappings()).to.eql({
            headers: mockMessage["headers"],
            attachments: mockMessage["attachments"],
            size: mockMessage["size"],
          });
    });
})
