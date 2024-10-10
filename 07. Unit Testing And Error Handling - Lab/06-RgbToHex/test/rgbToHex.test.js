import { expect } from "chai";
import { rgbToHexColor } from "../rgbToHex.js";

describe('rgbToHexColor', function () {
    
    it('Should return #FF9EAA for (255, 158, 170)', function () {
        expect(rgbToHexColor(255, 158, 170)).to.equal('#FF9EAA');
    });

    it('Should return #000000 for (0, 0, 0)', function () {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it('Should return #FFFFFF for (255, 255, 255)', function () {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    it('Should return #0000FF for (0, 0, 255)', function () {
        expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');
    });

    it('Should return #FF0000 for (255, 0, 0)', function () {
        expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
    });

    it('Should return #00FF00 for (0, 255, 0)', function () {
        expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
    });

    it('Should return undefined for values out of range (256, 0, 0)', function () {
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
    });

    it('Should return undefined for values out of range (-1, 0, 0)', function () {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    });

    it('Should return undefined if red is not an integer', function () {
        expect(rgbToHexColor(12.34, 0, 0)).to.be.undefined;
    });

    it('Should return undefined if green is not an integer', function () {
        expect(rgbToHexColor(0, "green", 0)).to.be.undefined;
    });

    it('Should return undefined if blue is not an integer', function () {
        expect(rgbToHexColor(0, 0, NaN)).to.be.undefined;
    });

    it('Should return undefined if any input is missing', function () {
        expect(rgbToHexColor(255)).to.be.undefined;
    });

    it('Should return undefined if a string is passed instead of a number', function () {
        expect(rgbToHexColor("255", 255, 255)).to.be.undefined;
    });
});
