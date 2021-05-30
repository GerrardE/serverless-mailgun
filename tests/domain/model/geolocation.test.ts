import * as chai from "chai";
import Geolocation from "../../../src/domain/model/mailgun/geolocation.model";

const mockGeolocation = {
    country: "US",
    region: "CA",
    city: "San Francisco"
}

const expect = chai.expect;

describe("GeolocationModel tests", () => {
    describe("It should get/set variables", () => {
        const geolocationModel = new Geolocation(mockGeolocation);

        it("It should get the country", () => {
            geolocationModel.setCountry(mockGeolocation["country"]);
            expect(geolocationModel.getCountry()).to.equal(mockGeolocation["country"]);
        });

        it("It should get the region", () => {
            geolocationModel.setRegion(mockGeolocation["region"]);
            expect(geolocationModel.getRegion()).to.equal(mockGeolocation["region"]);
        });

        it("It should get the city", () => {
            geolocationModel.setCity(mockGeolocation["city"]);
            expect(geolocationModel.getCity()).to.equal(mockGeolocation["city"]);
        });
    });

    describe("It should correctly map the entities", () => {
        const geolocationModel = new Geolocation(mockGeolocation);

        expect(geolocationModel.getEntityMappings()).to.eql({
            country: mockGeolocation["country"],
            region: mockGeolocation["region"],
            city: mockGeolocation["city"],
          });
    });
})
