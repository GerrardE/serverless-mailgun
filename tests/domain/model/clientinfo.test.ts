import * as chai from "chai";
import ClientInfo from "../../../src/domain/model/mailgun/clientinfo.model";

const mockClient = {
    "client-os": "Linux",
    "device-type": "desktop",
    "client-name": "Chrome",
    "client-type": "browser",
    "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.43 Safari/537.31"
}

const expect = chai.expect;

describe("Clientinfo model tests", () => {
    describe("It should get/set variables", () => {
        const clientInfo = new ClientInfo(mockClient);

        it("It should get the clientOs", () => {
            clientInfo.setClientOs(mockClient["client-os"]);
            expect(clientInfo.getClientOs()).to.equal(mockClient["client-os"]);
        });

        it("It should get the deviceType", () => {
            clientInfo.setDeviceType(mockClient["device-type"]);
            expect(clientInfo.getDeviceType()).to.equal(mockClient["device-type"]);
        });

        it("It should get the clientName", () => {
            clientInfo.setClientName(mockClient["client-name"]);
            expect(clientInfo.getClientName()).to.equal(mockClient["client-name"]);
        });

        it("It should get the clientType", () => {
            clientInfo.setClientType(mockClient["client-type"]);
            expect(clientInfo.getClientType()).to.equal(mockClient["client-type"]);
        });

        it("It should get the userAgent", () => {
            clientInfo.setuserAgent(mockClient["user-agent"]);
            expect(clientInfo.getUserAgent()).to.equal(mockClient["user-agent"]);
        });
    });

    describe("It should correctly map the entities", () => {
        const clientInfo = new ClientInfo(mockClient);

        expect(clientInfo.getEntityMappings()).to.eql({
            "client-os": mockClient["client-os"],
            "device-type": mockClient["device-type"],
            "client-name": mockClient["client-name"],
            "client-type": mockClient["client-type"],
            "user-agent": mockClient["user-agent"],
          });
    });
})
