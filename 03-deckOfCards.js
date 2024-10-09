function printDeckOfCards(cards) {

    const validCardFaces = { "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10, "J": "J", "Q": "Q", "K": "K", "A": "A" }
    const validCardSuits = { "S": "\u2660", "H": "\u2665", "D": "\u2666", "C": "\u2663" };
    const resultArr = [];

    function createCard() {

        for (const el of cards) {
            let [cardFace, cardSuit] = "";

            if (el.length === 2) {
                [cardFace, cardSuit] = el.split("");
            } else {
                cardFace = el.slice(0, 2);
                cardSuit = el.slice(2);
            }
            if (validCardFaces.hasOwnProperty(cardFace) && validCardSuits.hasOwnProperty(cardSuit)) {
                const cardObj = {
                    cardFace,
                    cardSuit,
                    toString() {
                        return `${validCardFaces[cardFace]}${validCardSuits[cardSuit]}`;
                    }
                };

                resultArr.push(cardObj.toString());
            } else {
                return "Invalid card: " + el;
            }
        }
        return resultArr;
    }

    let cardDeck = createCard();

    if (Array.isArray(cardDeck)) {
        console.log(cardDeck.join(" "));
    } else {
        console.log(cardDeck);
    }
}


printDeckOfCards(['5S', '3D', 'QD', '1C'])
// printDeckOfCards(['AS', '10D', 'KH', '2C'])

