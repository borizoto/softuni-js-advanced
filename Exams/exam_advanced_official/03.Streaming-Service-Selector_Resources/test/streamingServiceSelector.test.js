import { expect } from "chai";
import { streamingServiceSelector } from "../streamingServiceSelector.js";

describe("streamingServiceSelector object", function () {
    describe("selectingContent method", function () {
        it("Should throw error if the genre is not listed in the supported genres", function () {
            expect(() => { streamingServiceSelector.selectingContent("Movie", "Netflix", "Neshto") }).to.throw(Error, `We currently support these genres: Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi.`);
        })

        it("Should throw error if the value of type is different from Movie or TV Show", function () {
            expect(() => { streamingServiceSelector.selectingContent("Serial", "Netflix", "Action") }).to.throw(Error, `We currently only support 'Movie' or 'TV Show' types.`);
        })

        it("Should return positive message if all inputs are valid", function () {
            expect(streamingServiceSelector.selectingContent("Movie", "Netflix", "Action")).to.equal(`You can watch this Action Movie on Netflix. Enjoy your Action-filled experience!`)
        })
    })

    describe("availablePlatforms method", function () {
        it("Should throw error if platforms is not an array", function () {
            expect(() => { streamingServiceSelector.availablePlatforms("asd", 2) }).to.throw(Error, `Invalid platform selection.`);
            expect(() => { streamingServiceSelector.availablePlatforms("", 2) }).to.throw(Error, `Invalid platform selection.`);
            expect(() => { streamingServiceSelector.availablePlatforms(3, 2) }).to.throw(Error, `Invalid platform selection.`);
            expect(() => { streamingServiceSelector.availablePlatforms({}, 2) }).to.throw(Error, `Invalid platform selection.`);
            expect(() => { streamingServiceSelector.availablePlatforms(undefined, 2) }).to.throw(Error, `Invalid platform selection.`);
            expect(() => { streamingServiceSelector.availablePlatforms([], 2) }).to.throw(Error, `Invalid platform selection.`);
            expect(() => { streamingServiceSelector.availablePlatforms(-5, 2) }).to.throw(Error, `Invalid platform selection.`);
            expect(() => { streamingServiceSelector.availablePlatforms(-5.5, 2) }).to.throw(Error, `Invalid platform selection.`);
        })

        it("Should throw error if the selectedPlatformIndex is not a number and is outside the limits of the array", function () {
            expect(() => { streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], -1) }).to.throw(Error, `Invalid platform selection.`);
            expect(() => { streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], -3.3) }).to.throw(Error, `Invalid platform selection.`);
            expect(() => { streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], -1.2) }).to.throw(Error, `Invalid platform selection.`);
            expect(() => { streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], 10) }).to.throw(Error, `Invalid platform selection.`);
            expect(() => { streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], undefined) }).to.throw(Error, `Invalid platform selection.`);
            expect(() => { streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], "") }).to.throw(Error, `Invalid platform selection.`);
            expect(() => { streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], {}) }).to.throw(Error, `Invalid platform selection.`);
            expect(() => { streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], []) }).to.throw(Error, `Invalid platform selection.`);
        })

        it("Should return correct results after manipulation", function () {
            expect(streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], 1)).to.equal(`Other available platforms are: Netflix, Disney+.`);
            expect(streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], 2)).to.equal(`Other available platforms are: Netflix, HBO.`);
        })
    })

    describe("contentRating method", function () {
        it("Should return correct results after manipulation", function () {
            expect(streamingServiceSelector.contentRating(60, 7)).to.equal(`This content is highly rated (7/10) and has a runtime of 1.00 hours. Enjoy your watch!`);
            expect(streamingServiceSelector.contentRating(90, 8)).to.equal(`This content is highly rated (8/10) and has a runtime of 1.50 hours. Enjoy your watch!`);
            expect(streamingServiceSelector.contentRating(90, 8.9)).to.equal(`This content is highly rated (8.9/10) and has a runtime of 1.50 hours. Enjoy your watch!`);
            expect(streamingServiceSelector.contentRating(90, 6)).to.equal(`This content has a lower rating (6/10) and runs for 1.50 hours. You might want to check reviews first.`);
            expect(streamingServiceSelector.contentRating(60, 3)).to.equal(`This content has a lower rating (3/10) and runs for 1.00 hours. You might want to check reviews first.`);
            expect(streamingServiceSelector.contentRating(60.5, 3)).to.equal(`This content has a lower rating (3/10) and runs for 1.01 hours. You might want to check reviews first.`);
            expect(streamingServiceSelector.contentRating(60.5, 3.3)).to.equal(`This content has a lower rating (3.3/10) and runs for 1.01 hours. You might want to check reviews first.`);
        })

        it("Should throw error if runtimeInMinutes is not a positive number", function () {
            expect(() => { streamingServiceSelector.contentRating(-5, 3) }).to.throw(Error, `Invalid runtime or rating.`);
            expect(() => { streamingServiceSelector.contentRating(-5.5, 3) }).to.throw(Error, `Invalid runtime or rating.`);
            expect(() => { streamingServiceSelector.contentRating(0, 3) }).to.throw(Error, `Invalid runtime or rating.`);
            expect(() => { streamingServiceSelector.contentRating("", 3) }).to.throw(Error, `Invalid runtime or rating.`);
            expect(() => { streamingServiceSelector.contentRating([3], 3) }).to.throw(Error, `Invalid runtime or rating.`);
            expect(() => { streamingServiceSelector.contentRating([], 3) }).to.throw(Error, `Invalid runtime or rating.`);
            expect(() => { streamingServiceSelector.contentRating({}, 3) }).to.throw(Error, `Invalid runtime or rating.`);
        })

        it("Should throw error if viewerRating is not a number between 0 and 10", function () {
            expect(() => { streamingServiceSelector.contentRating(60, -1) }).to.throw(Error, `Invalid runtime or rating.`);
            expect(() => { streamingServiceSelector.contentRating(60, 11) }).to.throw(Error, `Invalid runtime or rating.`);
            expect(() => { streamingServiceSelector.contentRating(60, undefined) }).to.throw(Error, `Invalid runtime or rating.`);
            expect(() => { streamingServiceSelector.contentRating(60, "") }).to.throw(Error, `Invalid runtime or rating.`);
            expect(() => { streamingServiceSelector.contentRating(60, []) }).to.throw(Error, `Invalid runtime or rating.`);
            expect(() => { streamingServiceSelector.contentRating(60, {}) }).to.throw(Error, `Invalid runtime or rating.`);
        })
    })
})