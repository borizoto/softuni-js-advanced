import { expect } from "chai";
import { sum } from "../sumOfNumbers.js";

describe('Sum', function () {
    it('Should return the sum of numbers', function () {
        const input = [1, 2, 3];

        const expectedResult = 6;

        const actualResult = sum(input);

        expect(actualResult).to.equal(expectedResult);
    });

    it('Should take an array of numbers as an argument', function () {
        const input = [1, 2, 3];

        const expectedResult = Array.isArray(input);

        expect(expectedResult).to.be.true;
    });

    it('Should correctly sum all numeric values', function() {
        const input = [1, 2, 3, 4, 5];
    
        const actualResult = sum(input);
    
        expect(actualResult).to.equal(15);
    });
})