import * as chai from "chai";
import SignatureModel from "../../../src/domain/model/mailgun/signature.model";

const mockSignature = {
    timestamp: "1621701717",
    token: "e7bd5bb6f6d42aa66eb07d13507765226ba68f853b39646ead",
    signature: "9e46267b26d60aade2874d909952ba1375ed39ebe286bcc53308452265511adf"
};

const expect = chai.expect;

describe("Signature model tests", () => {
  describe("It should get/set correct values", () => {
    const signatureModel = new SignatureModel(mockSignature);

    it("It should get the timestamp", () => {
        signatureModel.setTimestamp(mockSignature["timestamp"]);
        expect(signatureModel.getTimestamp()).to.eql(mockSignature["timestamp"]);
    });

    it("It should get the token", () => {
        signatureModel.setToken(mockSignature["token"]);
        expect(signatureModel.getToken()).to.equal(mockSignature["token"]);
    });

    it("It should get the signature", () => {
        signatureModel.setSignature(mockSignature["signature"]);
        expect(signatureModel.getSignature()).to.equal(mockSignature["signature"]);
    });
  });

  describe("It should correctly map the entities", () => {
    it("It should return an object with correct entity values", () => {
      const signatureModel = new SignatureModel(mockSignature);

      expect(signatureModel.getEntityMappings()).to.eql({
        timestamp: mockSignature.timestamp,
        token: mockSignature.token,
        signature: mockSignature.signature,
      });
    });
  });
});
