describe("isOddOrEven", function () {
    describe("Tests where input is not a string", function() {
        it("Should return undefined if input is a number", function() {
            expect(isOddOrEven(5), "Expected non-string input").to.be.undefined;
            expect(isOddOrEven(4), "Expected non-string input").to.be.undefined;
            expect(isOddOrEven(-5), "Expected non-string input").to.be.undefined;
            expect(isOddOrEven(-4), "Expected non-string input").to.be.undefined;
        });

        it("Should return undefined if input is an array", function() {
            expect(isOddOrEven([]), "Expected non-string input").to.be.undefined;
            expect(isOddOrEven([3]), "Expected non-string input").to.be.undefined;
            expect(isOddOrEven([-3]), "Expected non-string input").to.be.undefined;
            expect(isOddOrEven([4]), "Expected non-string input").to.be.undefined;
            expect(isOddOrEven([-4]), "Expected non-string input").to.be.undefined;
        });

        it("Should return undefined if input is an array", function() {
            expect(isOddOrEven({}), "Expected non-string input").to.be.undefined;
            expect(isOddOrEven({gosho: "pesho"}), "Expected non-string input").to.be.undefined;
        });
    });

    describe("Tests where input is a string", function() {
        it("Should return even if input is even text length", function() {
            expect(isOddOrEven("abcd")).to.equal("even");
        })

        it("Should return even if input is even text length", function() {
            expect(isOddOrEven("abcde")).to.equal("odd");
        })
    })
})