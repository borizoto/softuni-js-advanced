describe("isOddOrEven", function () {
    describe("If the first parameter is NOT a string or the second parameter is NOT a number - return undefined.", function () {
        it("Should return undefined if first param is not a string", function () {
            expect(lookupChar(5, 5)).to.be.undefined;
        });

        it("Should return undefined if second param is not a number", function () {
            expect(lookupChar("5", "5")).to.be.undefined;
        });

        it("Should return undefined if first param is not a string and second not a number", function () {
            expect(lookupChar(5, "5")).to.be.undefined;
        });

        it("Should return undefined if first param is not a string and second not a number", function () {
            expect(lookupChar([5], ["5"])).to.be.undefined;
        });

        it("Should return undefined if first param is not a string and second not a number", function () {
            expect(lookupChar(["abc", 5], "5")).to.be.undefined;
        });

        it("Should return undefined if first param is not a string and second not a number", function () {
            expect(lookupChar({"5": 5}, {})).to.be.undefined;
        });

        it("Should return undefined if first param is not a string and second not a number", function () {
            expect(lookupChar({"5": 5}, [])).to.be.undefined;
        });

        it("Should return undefined if input index is floating number", function () {
            expect(lookupChar("abcde", 5.5)).to.to.be.undefined;
        });

        it("Should return undefined if input index is negative floating number", function () {
            expect(lookupChar("abcde", -5.5)).to.to.be.undefined;
        });
    });

    describe("If both parameters are of the correct type but the value of the index is incorrect (bigger than or equal to the string length or a negative number)", function () {
        it("Should return 'Incorrect index' if input index equals input length", function () {
            expect(lookupChar("abcde", 5)).to.equal("Incorrect index");
        });

        it("Should return 'Incorrect index' if input index is bigger than input length", function () {
            expect(lookupChar("abcde", 6)).to.equal("Incorrect index");
        });

        it("Should return 'Incorrect index' if input index is negative number", function () {
            expect(lookupChar("abcde", -5)).to.equal("Incorrect index");
        });
    });

    describe("If both parameters have correct types and values - return the character at the specified index in the string.", function () {
        it("Should return char at specified index", function () {
            expect(lookupChar("abcde", 1)).to.equal("b");
        });

        it("Should return char at specified index", function () {
            expect(lookupChar("abcde", 2)).to.equal("c");
        });

        it("Should return char at specified index", function () {
            expect(lookupChar("abcde", 0)).to.equal("a");
        });
    });
})