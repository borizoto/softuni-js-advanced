import { expect } from "chai";
import { createCalculator } from "../createCalculator.js";

describe('CreateClaculator', function () {
    it('Should return a module (object), containing the functions add(), subtract() and get() as properties', function () {
        const calculator = createCalculator();
        expect(calculator).to.have.property('add').that.is.a('function');
        expect(calculator).to.have.property('subtract').that.is.a('function');
        expect(calculator).to.have.property('get').that.is.a('function');
    });

    it('should return 0 when get() is called initially', function () {
        const calculator = createCalculator();
        expect(calculator.get()).to.equal(0);
    });

    it('should correctly add numbers', function () {
        const calculator = createCalculator();
        calculator.add(5);
        expect(calculator.get()).to.equal(5);
    });

    it('should correctly subtract numbers', function () {
        const calculator = createCalculator();
        calculator.subtract(3);
        expect(calculator.get()).to.equal(-3);
    });

    it('should correctly add and subtract numbers', function () {
        const calculator = createCalculator();
        calculator.add(10);
        calculator.subtract(4);
        expect(calculator.get()).to.equal(6);
    });

    it('should correctly parse and add/subtract numbers from string inputs', function () {
        const calculator = createCalculator();
        calculator.add('7');
        calculator.subtract('2');
        expect(calculator.get()).to.equal(5);
    });

    it('Should keep internal value private and not allow external modification', function () {
        const calculator = createCalculator();
        expect(calculator.value).to.be.undefined; 
        calculator.add(5);
        expect(calculator.get()).to.equal(5); 
    });

    it('Should return NaN if input is non-number', function () {
        const calculator = createCalculator();
        calculator.add('abc'); 
        expect(calculator.get()).to.be.NaN; 
    });
})