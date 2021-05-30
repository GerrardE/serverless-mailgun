import * as chai from "chai";
import ResponseModel from "../../src/domain/model/response.model";

const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true
};

const code = 200;

const mockResponse = {
    data: {},
    message: "Response tests passed",
    status: "success",
}

const expect = chai.expect;

describe("Response model tests", () => {
    describe("It should set/get variables", () => {
        const responseModel = new ResponseModel();

        it("It should set the correct status code", () => {
            responseModel.setCode(code);
            expect(responseModel.getCode()).to.eql(code);
        });

        it("It should set the message correctly", () => {
            responseModel.setMessage(mockResponse.message);
            expect(responseModel.getMessage()).to.eql(mockResponse.message);
        });
    });

    describe("It should correctly map the entities", () => {
        const responseModel = new ResponseModel(mockResponse.data, code, mockResponse.message);

        it("It should generate response object", () => {
            expect(responseModel.generate()).to.eql({
                statusCode: code,
                headers: headers,
                body: JSON.stringify(mockResponse),
                isBase64Encoded: false
            });
        });
    });
})
