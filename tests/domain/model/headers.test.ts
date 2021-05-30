import * as chai from "chai";
import HeadersModel from "../../../src/domain/model/mailgun/headers.model";

const mockHeaders = {
  to: "test@gmail.com",
  from: "from@gmail.com",
  subject: "A new test",
  "message-id": "xxcvty",
};

const expect = chai.expect;

describe("Headers model tests", () => {
  describe("It should get/set correct values", () => {
    const headersModel = new HeadersModel(mockHeaders);
    it("should be able to get the correct entity value", () => {
      expect(headersModel.getTo()).to.eql(mockHeaders.to);
      expect(headersModel.getFrom()).to.eql(mockHeaders.from);
      expect(headersModel.getSubject()).to.eql(mockHeaders.subject);
      expect(headersModel.getMessageId()).to.eql(mockHeaders["message-id"]);
    });

    it("It should get the to", () => {
      headersModel.setTo(mockHeaders["to"]);
      expect(headersModel.getTo()).to.eql(mockHeaders["to"]);
    });

    it("It should get the from", () => {
      headersModel.setFrom(mockHeaders["from"]);
      expect(headersModel.getFrom()).to.eql(mockHeaders["from"]);
    });

    it("It should get the subject", () => {
      headersModel.setSubject(mockHeaders["subject"]);
      expect(headersModel.getSubject()).to.eql(mockHeaders["subject"]);
    });
  });

  describe("It should correctly map the entities", () => {
    it("It should return an object with correct entity values", () => {
      const headersModel = new HeadersModel(mockHeaders);

      expect(headersModel.getEntityMappings()).to.eql({
        to: mockHeaders.to,
        from: mockHeaders.from,
        subject: mockHeaders.subject,
        "message-id": mockHeaders["message-id"],
      });
    });
  });
});
