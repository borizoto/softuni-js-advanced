function playingCards(cardFace, cardSuit) {
    const validCardFaces = { "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10, "J": "J", "Q": "Q", "K": "K", "A": "A" }
    const validCardSuits = { "S": "\u2660", "H": "\u2665", "D": "\u2666", "C": "\u2663" };
    
    if (validCardFaces.hasOwnProperty(cardFace) && validCardSuits.hasOwnProperty(cardSuit)) {
        const cardObj = {
            cardFace,
            cardSuit,
            toString() {
                return `${validCardFaces[cardFace]}${validCardSuits[cardSuit]}`;
            }
        }

        return cardObj.toString();
    }
    
    throw new Error();
}

console.log(playingCards('1', 'C' ))