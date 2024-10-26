describe("PaymentPackage Class", function () {
    describe("Constructor", function () {

        it("Should throw error for wrong type of name input", function () {
            expect(() => new PaymentPackage(["abc", "3"])).to.throw(Error, 'Name must be a non-empty string');
            expect(() => new PaymentPackage({ "gosho": 3 })).to.throw(Error, 'Name must be a non-empty string');
            expect(() => new PaymentPackage(3, 3)).to.throw(Error, 'Name must be a non-empty string');
            expect(() => new PaymentPackage(undefined)).to.throw(Error, 'Name must be a non-empty string');
            expect(() => new PaymentPackage()).to.throw(Error, 'Name must be a non-empty string');
        });

        it("Should throw error for missing or undefined value input", function () {
            expect(() => new PaymentPackage("Boce", -3)).to.throw(Error, 'Value must be a non-negative number');
            expect(() => new PaymentPackage("Boce", -3.3)).to.throw(Error, 'Value must be a non-negative number');
            expect(() => new PaymentPackage("Boce", undefined)).to.throw(Error, 'Value must be a non-negative number');
            expect(() => new PaymentPackage("Boce", [1, 2, 3])).to.throw(Error, 'Value must be a non-negative number');
            expect(() => new PaymentPackage("Boce", { "3": 3 })).to.throw(Error, 'Value must be a non-negative number');
            expect(() => new PaymentPackage("Boce", "3")).to.throw(Error, 'Value must be a non-negative number');
            expect(() => new PaymentPackage("Boce", "Boce")).to.throw(Error, 'Value must be a non-negative number');
            expect(() => new PaymentPackage("Boce")).to.throw(Error, 'Value must be a non-negative number');
        });
    })

    describe("name setter / getter", function () {
        it("Should set and get name properly", function () {
            const instance = new PaymentPackage('Partnership Fee', 7000);
            expect(instance.name).to.equal("Partnership Fee");

            instance.name = "Firmata na Boce";
            expect(instance.name).to.equal("Firmata na Boce");
        })

        it("Should throw error for missing or undefined name input", function () {
            expect(() => new PaymentPackage('', 7000)).to.throw(Error, 'Name must be a non-empty string');
            expect(() => new PaymentPackage(7000, 7000)).to.throw(Error, 'Name must be a non-empty string');
            expect(() => new PaymentPackage(['asdasdasd'], 7000)).to.throw(Error, 'Name must be a non-empty string');
            expect(() => new PaymentPackage([], 7000)).to.throw(Error, 'Name must be a non-empty string');
            expect(() => new PaymentPackage(undefined, 7000)).to.throw(Error, 'Name must be a non-empty string');
        })
    })

    describe("value setter / getter", function () {
        it("Should set and get value properly", function () {
            const instance = new PaymentPackage('Partnership Fee', 7000);
            expect(instance.value).to.equal(7000);
            instance.value = 5;
            expect(instance.value).to.equal(5);

            const instance2 = new PaymentPackage('Partnership Fee', 0);
            expect(instance2.value).to.equal(0);
            instance2.value = 5;
            expect(instance2.value).to.equal(5);

            const instance3 = new PaymentPackage('Partnership Fee', 7000);
            expect(instance3.value).to.equal(7000);
            instance3.value = 0;
            expect(instance3.value).to.equal(0);
        })

        it("Should throw error for missing or undefined / wrong value input", function () {
            expect(() => new PaymentPackage('Partnership Fee', 'Partnership Fee')).to.throw(Error, 'Value must be a non-negative number');
            expect(() => new PaymentPackage('Partnership Fee', "")).to.throw(Error, 'Value must be a non-negative number');
            expect(() => new PaymentPackage('Partnership Fee', [7000])).to.throw(Error, 'Value must be a non-negative number');
            expect(() => new PaymentPackage('Partnership Fee', [])).to.throw(Error, 'Value must be a non-negative number');
            expect(() => new PaymentPackage('Partnership Fee', "7000")).to.throw(Error, 'Value must be a non-negative number');
            expect(() => new PaymentPackage('Partnership Fee', { "7000": 7000 })).to.throw(Error, 'Value must be a non-negative number');
            expect(() => new PaymentPackage('Partnership Fee', undefined)).to.throw(Error, 'Value must be a non-negative number');
            expect(() => new PaymentPackage('Partnership Fee', -3)).to.throw(Error, 'Value must be a non-negative number');
            expect(() => new PaymentPackage('Partnership Fee', -3.3)).to.throw(Error, 'Value must be a non-negative number');
        })
    })

    describe("VAT setter / getter", function () {
        it("Should set and get VAT properly", function () {
            const instance = new PaymentPackage('Partnership Fee', 7000);
            expect(instance.VAT).to.equal(20);
            instance.VAT = 5;
            expect(instance.VAT).to.equal(5);
        })

        it("Should throw error for missing or undefined / wrong VAT input", function () {
            const instance = new PaymentPackage('Partnership Fee', 7000);
            expect(instance.VAT).to.equal(20);
            expect(instance.VAT = 30).to.equal(30);

            expect(() => { instance.VAT = "asd" }).to.throw(Error, 'VAT must be a non-negative number');
            expect(() => { instance.VAT = -3 }).to.throw(Error, 'VAT must be a non-negative number');
            expect(() => { instance.VAT = -3.3 }).to.throw(Error, 'VAT must be a non-negative number');
        })
    })

    describe("active setter / getter", function () {

        it("Should set and get active properly", function () {
            const instance = new PaymentPackage('Partnership Fee', 7000);
            expect(instance.active).to.be.true;
            instance.active = false;
            expect(instance.active).to.be.false;
        })

        it("Should throw error for missing or undefined / wrong active input", function () {
            const instance = new PaymentPackage('Partnership Fee', 7000);
            expect(instance.active).to.be.true;

            expect(() => { instance.active = "asd" }).to.throw(Error, 'Active status must be a boolean');
            expect(() => { instance.active = -3 }).to.throw(Error, 'Active status must be a boolean');
            expect(() => { instance.active = -3.3 }).to.throw(Error, 'Active status must be a boolean');
        })
    })

    describe("toString method", function () {
        it("Should return the correct string output with active status", function () {
            const instance = new PaymentPackage('Partnership Fee', 1000); 
            const outputActive = [
                `Package: Partnership Fee`,
                `- Value (excl. VAT): 1000`,
                `- Value (VAT 20%): 1200`
            ];

            expect(instance.toString()).to.equal(outputActive.join("\n"));
        })

        it("Should return the correct string output with inactive status", function () {
            const instance = new PaymentPackage('Partnership Fee', 1000); 
            instance.active = false;

            const outputInactive = [
                `Package: Partnership Fee (inactive)`,
                `- Value (excl. VAT): 1000`,
                `- Value (VAT 20%): 1200`
            ];

            expect(instance.toString()).to.equal(outputInactive.join("\n"));
        })
    });
})
