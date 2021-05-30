import * as chai from "chai";
import DeliveryStatus from "../../../src/domain/model/mailgun/deliverystatus.model";

const mockDeliveryStatus = {
    tls: true,
    "mx-host": "smtp-in.example.com",
    "attempt-no": 1,
    description: "xx",
    "session-seconds": 0.1281740665435791,
    utf8: true,
    "retry-seconds": 600,
    code: 452,
    message: "4.2.2 The email account that you tried to reach is over quota. Please direct 4.2.2 the recipient to 4.2.2 https://support.example.com/mail/?p=422",
    "certificate-verified": true,
}

const expect = chai.expect;

describe("Delivery status model tests", () => {
    describe("It should get/set variables", () => {
        const deliveryStatus = new DeliveryStatus(mockDeliveryStatus);

        it("It should get the tls", () => {
            deliveryStatus.setTls(mockDeliveryStatus["tls"]);
            expect(deliveryStatus.getTls()).to.equal(mockDeliveryStatus["tls"]);
        });

        it("It should get the mx-host", () => {
            deliveryStatus.setMxHost(mockDeliveryStatus["mx-host"]);
            expect(deliveryStatus.getMxHost()).to.equal(mockDeliveryStatus["mx-host"]);
        });

        it("It should get the attempt-no", () => {
            deliveryStatus.setAttemptNo(mockDeliveryStatus["attempt-no"]);
            expect(deliveryStatus.getAttemptNo()).to.equal(mockDeliveryStatus["attempt-no"]);
        });

        it("It should get the description", () => {
            deliveryStatus.setDescription(mockDeliveryStatus["description"]);
            expect(deliveryStatus.getDescription()).to.equal(mockDeliveryStatus["description"]);
        });

        it("It should get the session-seconds", () => {
            deliveryStatus.setSessionSeconds(mockDeliveryStatus["session-seconds"]);
            expect(deliveryStatus.getSessionSeconds()).to.equal(mockDeliveryStatus["session-seconds"]);
        });

        it("It should get the utf8", () => {
            deliveryStatus.setUtf8(mockDeliveryStatus["utf8"]);
            expect(deliveryStatus.getUtf8()).to.equal(mockDeliveryStatus["utf8"]);
        });

        it("It should get the retry-seconds", () => {
            deliveryStatus.setRetrySeconds(mockDeliveryStatus["retry-seconds"]);
            expect(deliveryStatus.getRetrySeconds()).to.equal(mockDeliveryStatus["retry-seconds"]);
        });

        it("It should get the code", () => {
            deliveryStatus.setCode(mockDeliveryStatus["code"]);
            expect(deliveryStatus.getCode()).to.equal(mockDeliveryStatus["code"]);
        });

        it("It should get the message", () => {
            deliveryStatus.setMessage(mockDeliveryStatus["message"]);
            expect(deliveryStatus.getMessage()).to.equal(mockDeliveryStatus["message"]);
        });

        it("It should get the certificate-verified", () => {
            deliveryStatus.setCertificateVerified(mockDeliveryStatus["certificate-verified"]);
            expect(deliveryStatus.getCertificateVerified()).to.equal(mockDeliveryStatus["certificate-verified"]);
        });
    });

    describe("It should correctly map the entities", () => {
        const deliveryStatus = new DeliveryStatus(mockDeliveryStatus);

        expect(deliveryStatus.getEntityMappings()).to.eql({
            tls: mockDeliveryStatus["tls"],
            "mx-host": mockDeliveryStatus["mx-host"],
            "attempt-no": mockDeliveryStatus["attempt-no"],
            description: mockDeliveryStatus["description"],
            "session-seconds": mockDeliveryStatus["session-seconds"],
            utf8: mockDeliveryStatus["utf8"],
            "retry-seconds": mockDeliveryStatus["retry-seconds"],
            code: mockDeliveryStatus["code"],
            message: mockDeliveryStatus["message"],
            "certificate-verified": mockDeliveryStatus["certificate-verified"]
        });
    });
})
