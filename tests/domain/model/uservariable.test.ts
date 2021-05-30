import * as chai from "chai";
import UserVariablesModel from "../../../src/domain/model/mailgun/uservariables.model";

const mockUserVariables = {
    "my_var_1": "Mailgun Variable #1",
    "my-var-2": "awesome"
};

const expect = chai.expect;

describe("Uservariables model tests", () => {
  describe("It should get/set correct values", () => {
    const uservariablesModel = new UserVariablesModel (mockUserVariables);

    it("It should get the my_var_1", () => {
        uservariablesModel.setMyVar1(mockUserVariables["my_var_1"]);
        expect(uservariablesModel.getMyVar1()).to.eql(mockUserVariables["my_var_1"]);
    });

    it("It should get the my-var-2", () => {
        uservariablesModel.setMyVar2(mockUserVariables["my-var-2"]);
        expect(uservariablesModel.getMyVar2()).to.equal(mockUserVariables["my-var-2"]);
    });
  });

  describe("It should correctly map the entities", () => {
    it("It should return an object with correct entity values", () => {
      const uservariablesModel = new UserVariablesModel (mockUserVariables);

      expect(uservariablesModel.getEntityMappings()).to.eql({
        "my_var_1": mockUserVariables["my_var_1"],
        "my-var-2": mockUserVariables["my-var-2"],
      });
    });
  });
});
