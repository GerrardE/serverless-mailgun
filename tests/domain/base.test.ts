import * as chai from "chai";
import BaseModel from "../../src/domain/model/base.model";

const expect = chai.expect;

describe("Base model tests", () => {
    describe("It should get variables", () => {
        const baseModel = new BaseModel();

        it("It should get the createdAt", () => {
            expect(typeof baseModel.getCreatedAt()).to.be.a("string");
        });
        it("It should get the updatedAt", () => {
            expect(typeof baseModel.getUpdatedAt()).to.be.a("string");
        });
        it("It should get the id", () => {
            expect(typeof baseModel.getId()).to.be.a("string");
        });
    });

    describe("It should correctly map the entities", () => {
        const baseModel = new BaseModel();

        it("It should return entity object", () => {
            expect(baseModel.getBaseEntityMappings()).to.be.an("object");
            expect(baseModel.getBaseEntityMappings()).to.have.own.property("id");
            expect(baseModel.getBaseEntityMappings()).to.have.own.property("createdAt");
            expect(baseModel.getBaseEntityMappings()).to.have.own.property("updatedAt");
        });
    });
})
