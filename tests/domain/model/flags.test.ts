import * as chai from "chai";
import FlagsModel from "../../../src/domain/model/mailgun/flags.model";

const mockFlags = {
    "is-routed": false,
    "is-authenticated": true,
    "is-system-test": false,
    "is-test-mode": false
}

const expect = chai.expect;

describe("FlagsModel tests", () => {
    describe("It should get/set variables", () => {
        const flagsModel = new FlagsModel(mockFlags);

        it("It should get the is-routed", () => {
            flagsModel.setIsRouted(mockFlags["is-routed"]);
            expect(flagsModel.getIsRouted()).to.equal(mockFlags["is-routed"]);
        });

        it("It should get the is-authenticated", () => {
            flagsModel.setisAuthenticated(mockFlags["is-authenticated"]);
            expect(flagsModel.getisAuthenticated()).to.equal(mockFlags["is-authenticated"]);
        });

        it("It should get the is-system-test", () => {
            flagsModel.setIsSystemTest(mockFlags["is-system-test"]);
            expect(flagsModel.getIsSystemTest()).to.equal(mockFlags["is-system-test"]);
        });

        it("It should get the is-test-mode", () => {
            flagsModel.setIsTestMode(mockFlags["is-test-mode"]);
            expect(flagsModel.getIsTestMode()).to.equal(mockFlags["is-test-mode"]);
        });
    });

    describe("It should correctly map the entities", () => {
        const flagsModel = new FlagsModel(mockFlags);

        expect(flagsModel.getEntityMappings()).to.eql({
            "is-routed": mockFlags["is-routed"],
            "is-authenticated": mockFlags["is-authenticated"],
            "is-system-test": mockFlags["is-system-test"],
            "is-test-mode": mockFlags["is-test-mode"],
          });
    });
})
