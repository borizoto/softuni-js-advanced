describe("mathEnforcer", function () {
    describe("addFive method", function () {
        describe("If the parameter is NOT a number, the function should return undefined", function () { //Non num describe
            it("Should return undefined if param is not a number", function () {
                expect(mathEnforcer.addFive("abc")).to.be.undefined;
            });

            it("Should return undefined if param is not a number", function () {
                expect(mathEnforcer.addFive("3")).to.be.undefined;
            });

            it("Should return undefined if param is not a number", function () {
                expect(mathEnforcer.addFive("")).to.be.undefined;
            });

            it("Should return undefined if param is not a number", function () {
                expect(mathEnforcer.addFive(undefined)).to.be.undefined;
            });

            it("Should return undefined if param is not a number", function () {
                expect(mathEnforcer.addFive([])).to.be.undefined;
            });

            it("Should return undefined if param is not a number", function () {
                expect(mathEnforcer.addFive(["abc"])).to.be.undefined;
            });

            it("Should return undefined if param is not a number", function () {
                expect(mathEnforcer.addFive({})).to.be.undefined;
            });

            it("Should return undefined if param is not a number", function () {
                expect(mathEnforcer.addFive({ "abc": 3 })).to.be.undefined;
            });
        });

        describe("If the parameter is a number, add 5 to it, and return the result", function () { // Num describe
            it("Should return result if param is a number", function () {
                expect(mathEnforcer.addFive(5)).to.equal(10);
            });

            it("Should return result if param is a number", function () {
                expect(mathEnforcer.addFive(5.5)).to.equal(10.5);
            });

            it("Should return result if param is a number", function () {
                expect(mathEnforcer.addFive(0)).to.equal(5);
            });

            it("Should return result if param is a number", function () {
                expect(mathEnforcer.addFive(-5)).to.equal(0);
            });
        });
    });

    describe("subtractTen method", function () {
        describe("If the parameter is NOT a number, the function should return undefined", function () { //Non num describe
            it("Should return undefined if param is not a number", function () {
                expect(mathEnforcer.subtractTen("abc")).to.be.undefined;
            });

            it("Should return undefined if param is not a number", function () {
                expect(mathEnforcer.subtractTen("3")).to.be.undefined;
            });

            it("Should return undefined if param is not a number", function () {
                expect(mathEnforcer.subtractTen("")).to.be.undefined;
            });

            it("Should return undefined if param is not a number", function () {
                expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
            });

            it("Should return undefined if param is not a number", function () {
                expect(mathEnforcer.subtractTen([])).to.be.undefined;
            });

            it("Should return undefined if param is not a number", function () {
                expect(mathEnforcer.subtractTen(["abc"])).to.be.undefined;
            });

            it("Should return undefined if param is not a number", function () {
                expect(mathEnforcer.subtractTen({})).to.be.undefined;
            });

            it("Should return undefined if param is not a number", function () {
                expect(mathEnforcer.subtractTen({ "abc": 3 })).to.be.undefined;
            });
        });

        describe("If the parameter is a number, add 5 to it, and return the result", function () { // Num describe
            it("Should return result if param is a number", function () {
                expect(mathEnforcer.subtractTen(15)).to.equal(5);
            });

            it("Should return result if param is a number", function () {
                expect(mathEnforcer.subtractTen(15.5)).to.equal(5.5);
            });

            it("Should return result if param is a number", function () {
                expect(mathEnforcer.subtractTen(0)).to.equal(-10);
            });

            it("Should return result if param is a number", function () {
                expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
            });
        });
    });

    describe("sum method", function () {
        describe("If any of the 2 parameters is NOT a number, the function should return undefined", function () {
            it("Should return undefined if any of the params is not a number", function () {
                expect(mathEnforcer.sum("abc", 1)).to.be.undefined;
            });

            it("Should return undefined if any of the params is not a number", function () {
                expect(mathEnforcer.sum(1, "abc")).to.be.undefined;
            });

            it("Should return undefined if any of the params is not a number", function () {
                expect(mathEnforcer.sum("3", 1)).to.be.undefined;
            });

            it("Should return undefined if any of the params is not a number", function () {
                expect(mathEnforcer.sum(1, "3")).to.be.undefined;
            });

            it("Should return undefined if any of the params is not a number", function () {
                expect(mathEnforcer.sum("", 1)).to.be.undefined;
            });

            it("Should return undefined if any of the params is not a number", function () {
                expect(mathEnforcer.sum("abc", "cba")).to.be.undefined;
            });

            it("Should return undefined if any of the params is not a number", function () {
                expect(mathEnforcer.sum(undefined, 1)).to.be.undefined;
            });

            it("Should return undefined if any of the params is not a number", function () {
                expect(mathEnforcer.sum(1, undefined)).to.be.undefined;
            });

            it("Should return undefined if any of the params is not a number", function () {
                expect(mathEnforcer.sum(undefined, undefined)).to.be.undefined;
            });

            it("Should return undefined if any of the params is not a number", function () {
                expect(mathEnforcer.sum([], [])).to.be.undefined;
            });

            it("Should return undefined if any of the params is not a number", function () {
                expect(mathEnforcer.sum([], {a:3})).to.be.undefined;
            });

            it("Should return undefined if any of the params is not a number", function () {
                expect(mathEnforcer.sum([], {a:"3"})).to.be.undefined;
            });

            it("Should return undefined if any of the params is not a number", function () {
                expect(mathEnforcer.sum({a:"3"}, [])).to.be.undefined;
            });

            it("Should return undefined if any of the params is not a number", function () {
                expect(mathEnforcer.sum(["abc"], [3, 2])).to.be.undefined;
            });

            it("Should return undefined if any of the params is not a number", function () {
                expect(mathEnforcer.sum({}, [3, 2])).to.be.undefined;
            });

            it("Should return undefined if any of the params is not a number", function () {
                expect(mathEnforcer.sum(3, { "abc": 3 })).to.be.undefined;
            });
        });

        describe("If both parameters are numbers, the function should return their sum", function () {
            it("Should return the sum of the two nums", function() {
                expect(mathEnforcer.sum(5, 5)).to.equal(10);
            });

            it("Should return the sum of the two nums", function() {
                expect(mathEnforcer.sum(5, -5)).to.equal(0);
            });

            it("Should return the sum of the two nums", function() {
                expect(mathEnforcer.sum(-5, 5)).to.equal(0);
            });

            it("Should return the sum of the two nums", function() {
                expect(mathEnforcer.sum(-5, -5)).to.equal(-10);
            });

            it("Should return the sum of the two nums", function() {
                expect(mathEnforcer.sum(0, 0)).to.equal(0);
            });

            it("Should return the sum of the two nums", function() {
                expect(mathEnforcer.sum(5, 5.5)).to.equal(10.5);
            });

            it("Should return the sum of the two nums", function() {
                expect(mathEnforcer.sum(5.5, 5)).to.equal(10.5);
            });

            it("Should return the sum of the two nums", function() {
                expect(mathEnforcer.sum(-5.5, -5)).to.equal(-10.5);
            });

            it("Should return the sum of the two nums", function() {
                expect(mathEnforcer.sum(-5, -5.5)).to.equal(-10.5);
            });
        });
    });
})