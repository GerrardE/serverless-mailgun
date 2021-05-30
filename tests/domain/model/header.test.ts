import * as chai from "chai";
import HeaderModel from "../../../src/domain/model/mailgun/header.model";

const mockHeaderModel = {
    host: "en92e8eif9ukh.x.pipedream.net",
    "x-amzn-trace-id": "Root=1-60a934c8-617f4265039de8a1020bc290",
    "content-length": 968,
    "content-type": "application/json",
    "accept-encoding": "gzip",
    accept: "*/*",
    "user-agent": "mailgun/treq-16.12.0"
}

const expect = chai.expect;

describe("Header model tests", () => {
    describe("It should get/set variables", () => {
        const headerModel = new HeaderModel(mockHeaderModel);

        it("It should get the host", () => {
            headerModel.setHost(mockHeaderModel["host"]);
            expect(headerModel.getHost()).to.equal(mockHeaderModel["host"]);
        });

        it("It should get the x-amzn-trace-id", () => {
            headerModel.setXAmznTraceId(mockHeaderModel["x-amzn-trace-id"]);
            expect(headerModel.getXAmznTraceId()).to.equal(mockHeaderModel["x-amzn-trace-id"]);
        });

        it("It should get the content-length", () => {
            headerModel.setContentLength(mockHeaderModel["content-length"]);
            expect(headerModel.getContentLength()).to.equal(mockHeaderModel["content-length"]);
        });

        it("It should get the content-type", () => {
            headerModel.setContentType(mockHeaderModel["content-type"]);
            expect(headerModel.getContentType()).to.equal(mockHeaderModel["content-type"]);
        });

        it("It should get the accept-encoding", () => {
            headerModel.setAcceptEncoding(mockHeaderModel["accept-encoding"]);
            expect(headerModel.getAcceptEncoding()).to.equal(mockHeaderModel["accept-encoding"]);
        });

        it("It should get the accept", () => {
            headerModel.setAccept(mockHeaderModel["accept"]);
            expect(headerModel.getAccept()).to.equal(mockHeaderModel["accept"]);
        });

        it("It should get the user-agent", () => {
            headerModel.setUserAgent(mockHeaderModel["user-agent"]);
            expect(headerModel.getUserAgent()).to.equal(mockHeaderModel["user-agent"]);
        });
    });

    describe("It should correctly map the entities", () => {
        const headerModel = new HeaderModel(mockHeaderModel);

        expect(headerModel.getEntityMappings()).to.eql({
            host: mockHeaderModel["host"],
            "x-amzn-trace-id": mockHeaderModel["x-amzn-trace-id"],
            "content-length": mockHeaderModel["content-length"],
            "content-type": mockHeaderModel["content-type"],
            "accept-encoding": mockHeaderModel["accept-encoding"],
            accept: mockHeaderModel["accept"],
            "user-agent": mockHeaderModel["user-agent"],
        });
    });
})
