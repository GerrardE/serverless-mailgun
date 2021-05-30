import * as chai from "chai";
import EnvelopeModel from "../../../src/domain/model/mailgun/envelope.model";

const mockEnvelope =  {
    transport: "smtp",
    sender: "bob@sandbox5eefc36737c54ad8a95c7125a83a76ca.mailgun.org",
    "sending-ip": "209.61.154.250",
    targets: "alice@example.com"
}

const expect = chai.expect;

describe("EnvelopeModel tests", () => {
    describe("It should get/set variables", () => {
        const envelopeModel = new EnvelopeModel(mockEnvelope);

        it("It should get the transport", () => {
            envelopeModel.setTransport(mockEnvelope["transport"]);
            expect(envelopeModel.getTransport()).to.equal(mockEnvelope["transport"]);
        });

        it("It should get the sender", () => {
            envelopeModel.setSender(mockEnvelope["sender"]);
            expect(envelopeModel.getSender()).to.equal(mockEnvelope["sender"]);
        });

        it("It should get the sending-ip", () => {
            envelopeModel.setSendingIp(mockEnvelope["sending-ip"]);
            expect(envelopeModel.getSendingIp()).to.equal(mockEnvelope["sending-ip"]);
        });

        it("It should get the targets", () => {
            envelopeModel.setTargets(mockEnvelope["targets"]);
            expect(envelopeModel.getTargets()).to.equal(mockEnvelope["targets"]);
        });
    });

    describe("It should correctly map the entities", () => {
        const envelopeModel = new EnvelopeModel(mockEnvelope);

        expect(envelopeModel.getEntityMappings()).to.eql({
            transport: mockEnvelope["transport"],
            sender: mockEnvelope["sender"],
            "sending-ip": mockEnvelope["sending-ip"],
            targets: mockEnvelope["targets"],
          });
    });
})
