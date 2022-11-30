class Deck {
    constructor(cards) {
        this.cards = cards
    }

    countCards() {
        // console.log(this.cards)
       return this.cards.length
    }
}


module.exports = Deck;
