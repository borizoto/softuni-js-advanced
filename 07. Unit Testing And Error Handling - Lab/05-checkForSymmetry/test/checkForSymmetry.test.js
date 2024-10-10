import { expect } from "chai";
import { isSymmetric } from "../checkForSymmetry.js"

describe('isSymmetric', function () {

    it('Should return true if the input array is symmetric', function () {
        const input = [1, 2, 3, 2, 1];
        const expectedResult = isSymmetric(input);
        expect(expectedResult).to.be.true;
    });

    it('Should return false for any input that isn’t of the correct type', function () {
        expect(isSymmetric(undefined)).to.be.false;
        expect(isSymmetric(null)).to.be.false;
        expect(isSymmetric({})).to.be.false;
        expect(isSymmetric(false)).to.be.false;
        expect(isSymmetric(NaN)).to.be.false;
        expect(isSymmetric("")).to.be.false;
        expect(isSymmetric(3.7)).to.be.false;
        expect(isSymmetric('1,2,3')).to.be.false;
    });

    it('Should return true if an array with a single number is given', function () {
        expect(isSymmetric([1])).to.be.true;
    });

    it('Should return true if an array with a single string is given', function () {
        expect(isSymmetric(["a"])).to.be.true;
    });

    it('Should return false if an array with mixed types is given', function () {
        expect(isSymmetric([1, 2, '1'])).to.be.false;
    });

    it('Should return false if symmetric numbers are given as arguments', function () {
        expect(isSymmetric(1, 2, 1)).to.be.false;
    });

    it('Should return false if array is not symmetric', function () {
        expect(isSymmetric([1, 2, 3])).to.be.false; 
    });

    it('Should return true if an empty array is given', function () {
        expect(isSymmetric([])).to.be.true;
    });

    it('Should return false if a single number is given', function () {
        expect(isSymmetric(1)).to.be.false;
        expect(isSymmetric(-1)).to.be.false; 
    });

    it('Should return true if it input is a string array', function () {
        expect(isSymmetric(['pesho', 'gosho', 'pesho'])).to.be.true;
        expect(isSymmetric([3.14, -1, 3.14])).to.be.true;
        expect(isSymmetric([true, false, true])).to.be.true;
    });
});
