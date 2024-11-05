import { expect } from "chai";
import { weddingDay } from "../weddingDay.js";

describe("WeddingDay Object", function () {
    describe("pickVenue method", function () {
        it("Should throw an error if one of the three parameters is invalid", function () {
            expect(() => { weddingDay.pickVenue("3", 3, "abv") }).to.throw(Error, "Invalid Information!");
            expect(() => { weddingDay.pickVenue(3, "3", "abv") }).to.throw(Error, "Invalid Information!");
            expect(() => { weddingDay.pickVenue(3.3, "3", "abv") }).to.throw(Error, "Invalid Information!");
            expect(() => { weddingDay.pickVenue(-3, "3", "abv") }).to.throw(Error, "Invalid Information!");
            expect(() => { weddingDay.pickVenue("-3", -3.3, "abv") }).to.throw(Error, "Invalid Information!");
            expect(() => { weddingDay.pickVenue(3, "", "abv") }).to.throw(Error, "Invalid Information!");
            expect(() => { weddingDay.pickVenue(3, 3, 3) }).to.throw(Error, "Invalid Information!");
            expect(() => { weddingDay.pickVenue("abv", "abv", 3) }).to.throw(Error, "Invalid Information!");
            expect(() => { weddingDay.pickVenue("abv", "", "") }).to.throw(Error, "Invalid Information!");
            expect(() => { weddingDay.pickVenue([], {}, "") }).to.throw(Error, "Invalid Information!");
            expect(() => { weddingDay.pickVenue({}, [], "") }).to.throw(Error, "Invalid Information!");
            expect(() => { weddingDay.pickVenue(undefined, undefined, "abv") }).to.throw(Error, "Invalid Information!");
            expect(() => { weddingDay.pickVenue(undefined, 3, "") }).to.throw(Error, "Invalid Information!");
        })

        it("Should throw a LOCATION error if location is not Varna", function () {
            expect(() => { weddingDay.pickVenue(3, 3, "Sofia") }).to.throw(Error, "The location of this venue is not in the correct area!");
            expect(() => { weddingDay.pickVenue(3, 3, "Burgas") }).to.throw(Error, "The location of this venue is not in the correct area!");
        })

        it("Should return positive string if venue is picked", function () {
            const capacity = 150;
            const pricePerGuest = 120;
            expect(weddingDay.pickVenue(150, 120, "Varna")).to.equal(`This venue meets the requirements, with capacity of ${capacity} guests and ${pricePerGuest}$ cover.`)
            expect(weddingDay.pickVenue(151, 119, "Varna")).to.equal(`This venue meets the requirements, with capacity of 151 guests and 119$ cover.`)
        })

        it("Should return negative string if venue is picked", function () {

            expect(weddingDay.pickVenue(150, 130, "Varna")).to.equal(`This venue does not meet your requirements!`)
            expect(weddingDay.pickVenue(121, 149, "Varna")).to.equal(`This venue does not meet your requirements!`)
        })
    })

    describe("otherSpendings method", function () {
        it("Should throw an error if one of the three parameters is invalid", function () {
            // expect(() => {weddingDay.otherSpendings(["flowers", "Fabric drapes and curtains"], ["pictures", "video"], true)}).to.throw(Error, "Invalid Information!");
            expect(() => { weddingDay.otherSpendings("sdt", ["pictures", "video"], true) }).to.throw(Error, "Invalid Information!");
            expect(() => { weddingDay.otherSpendings(["flowers", "Fabric drapes and curtains"], "abc", true) }).to.throw(Error, "Invalid Information!");
            expect(() => { weddingDay.otherSpendings(["flowers", "Fabric drapes and curtains"], 3, true) }).to.throw(Error, "Invalid Information!");
            expect(() => { weddingDay.otherSpendings("sdsd", ["pictures", "video"], true) }).to.throw(Error, "Invalid Information!");
            expect(() => { weddingDay.otherSpendings(["flowers", "Fabric drapes and curtains"], ["pictures", "video"], "truee") }).to.throw(Error, "Invalid Information!");
            expect(() => { weddingDay.otherSpendings(["flowers", "Fabric drapes and curtains"], ["pictures", "video"], 3) }).to.throw(Error, "Invalid Information!");
            expect(() => { weddingDay.otherSpendings(["flowers", "Fabric drapes and curtains"], ["pictures", "video"], undefined) }).to.throw(Error, "Invalid Information!");
        })

        it("Should return positive with correct input", function () {
            expect(weddingDay.otherSpendings(["flowers", "Fabric drapes and curtains"], ["pictures", "video"], true)).to.equal(`You spend 2465$ for wedding decoration and photography with 15% discount!`);
            expect(weddingDay.otherSpendings(["flowers", "Fabric drapes and curtains"], ["pictures", "video"], false)).to.equal(`You spend 2900$ for wedding decoration and photography!`);
        })
    })

    describe("tableDistribution method", function () {
        it("Should throw an error if one of the three parameters is invalid", function () {
            expect(() => { weddingDay.tableDistribution(-3, -3)}).to.throw(Error, "Invalid Information!");
            expect(() => { weddingDay.tableDistribution(3, -3.3) }).to.throw(Error, "Invalid Information!");
            expect(() => { weddingDay.tableDistribution(-3.3, 3) }).to.throw(Error, "Invalid Information!");
            expect(() => { weddingDay.tableDistribution("", 3) }).to.throw(Error, "Invalid Information!");
            expect(() => { weddingDay.tableDistribution("3", 3) }).to.throw(Error, "Invalid Information!");
            expect(() => { weddingDay.tableDistribution(3, "3") }).to.throw(Error, "Invalid Information!");
            expect(() => { weddingDay.tableDistribution(3, undefined) }).to.throw(Error, "Invalid Information!");
            expect(() => { weddingDay.tableDistribution(3, []) }).to.throw(Error, "Invalid Information!");
            expect(() => { weddingDay.tableDistribution(3, {}) }).to.throw(Error, "Invalid Information!");
        })

        it("Should return valid string", function () {
            expect(weddingDay.tableDistribution(50,10)).to.equal("There is only 5 people on every table, you can join some tables.");
            expect(weddingDay.tableDistribution(100,10)).to.equal("You have 10 tables with 10 guests on table.");
        })
    })
})