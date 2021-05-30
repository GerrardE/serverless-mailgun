import * as chai from "chai";
import StorageModel from "../../../src/domain/model/mailgun/storage.model";

const mockStorage = {
    url: "https://se.api.mailgun.net/v3/domains/sandbox5eefc36737c54ad8a95c7125a83a76ca.mailgun.org/messages/message_key",
    key: "message_key"
};

const expect = chai.expect;

describe("Storage model tests", () => {
  describe("It should get/set correct values", () => {
    const storageModel = new StorageModel (mockStorage);

    it("It should get the url", () => {
        storageModel.setUrl(mockStorage["url"]);
        expect(storageModel.getUrl()).to.eql(mockStorage["url"]);
    });

    it("It should get the key", () => {
        storageModel.setKey(mockStorage["key"]);
        expect(storageModel.getKey()).to.equal(mockStorage["key"]);
    });
  });

  describe("It should correctly map the entities", () => {
    it("It should return an object with correct entity values", () => {
      const storageModel = new StorageModel (mockStorage);

      expect(storageModel.getEntityMappings()).to.eql({
        "url": mockStorage["url"],
        "key": mockStorage["key"],
      });
    });
  });
});
