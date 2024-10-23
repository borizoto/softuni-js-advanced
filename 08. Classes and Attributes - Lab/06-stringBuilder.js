describe("stringBuilder Class", function () {

    // Test for correct instantiation
    describe('Constructor', () => {
        it("toString() should return empty string if there is no input", function () {
            const instance = new StringBuilder();
            expect(instance.toString()).to.equal("");
        });

        it("toString() should return the same string as the input", function () {
            const instance = new StringBuilder("abc");
            expect(instance.toString()).to.equal("abc")
        });

        it("toString() should return empty string if input is undefined", function () {
            const instance = new StringBuilder(undefined);
            expect(instance.toString()).to.equal("");
        });

        it("Should throw error if input is not string", function () {
            expect(function () { new StringBuilder(3) }).to.throw(TypeError, 'Argument must be a string');
            expect(() => new StringBuilder(-3)).to.throw(TypeError, 'Argument must be a string');
            expect(() => new StringBuilder({ "abc": 3 })).to.throw(TypeError, 'Argument must be a string');
            expect(() => new StringBuilder([3])).to.throw(TypeError, 'Argument must be a string');
            expect(() => new StringBuilder([])).to.throw(TypeError, 'Argument must be a string');
            expect(() => new StringBuilder({})).to.throw(TypeError, 'Argument must be a string');
        });
    });

    // Test append functionality
    describe('append()', function () {
        it('Should throw TypeError when non-string argument is passed to append', function () {
            const instance = new StringBuilder('Hi');
            expect(() => instance.append(123)).to.throw(TypeError, 'Argument must be a string');
        });

        it("toString() should return the same string as the input plus the appended value at the end", function () {
            const instance = new StringBuilder("Hi");
            instance.append(" Boce")
            expect(instance.toString()).to.equal("Hi Boce");
        });
    });

    // Test prepend functionality
    describe('prepend()', function () {
        it('Should throw TypeError when non-string argument is passed to prepend', function () {
            const instance = new StringBuilder('Hi');
            expect(() => instance.prepend(123)).to.throw(TypeError, 'Argument must be a string');
        });

        it("toString() should return the same string as the input plus the appended value at the begining", function () {
            const instance = new StringBuilder(" Boce");
            instance.prepend("Hi")
            expect(instance.toString()).to.equal("Hi Boce");
        });
    });

    // Test insertAt functionality
    describe('insertAt()', function () {
        it('Should insert string at the correct index', function () {
            let instance = new StringBuilder('Hi Boce');
            instance.insertAt(' bate', 2);
            expect(instance.toString()).to.equal('Hi bate Boce');
        });

        it('Should throw TypeError when non-string argument is passed to insertAt', function () {
            let instance = new StringBuilder('Hi');
            expect(() => instance.insertAt(123, 1)).to.throw(TypeError, 'Argument must be a string');
        });
    });

    // Test remove functionality
    describe('remove()', function () {
        it('Should remove the correct number of characters starting from the given index', function () {
            let instance = new StringBuilder('Hi bate Boce');
            instance.remove(3, 5);  // Remove 'beautiful '
            expect(instance.toString()).to.equal('Hi Boce');
        });
    });

    // Test toString functionality
    describe('toString()', function () {
        it("toString() should return the same string as the input", function () {
            const instance = new StringBuilder("abc");
            expect(instance.toString()).to.equal("abc")
        });

        it("toString() should return empty string if there is no input", function () {
            const instance = new StringBuilder();
            expect(instance.toString()).to.equal("");
        });
    });

    describe('Integration Tests', () => {
        it('Should perform multiple operations correctly', function () {
            // Create an instance of StringBuilder
            let instance = new StringBuilder('hi');

            // Append a string
            instance.append(' Boce');
            expect(instance.toString()).to.equal('hi Boce');

            // Prepend a string
            instance.prepend('Ayoo, ');
            expect(instance.toString()).to.equal('Ayoo, hi Boce');

            // Insert a string in the middle
            instance.insertAt('bate ', 9);
            expect(instance.toString()).to.equal('Ayoo, hi bate Boce');

            // Remove a section of the string
            instance.remove(9, 5);
            expect(instance.toString()).to.equal('Ayoo, hi Boce');
        });
    });
})