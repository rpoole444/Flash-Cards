const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

class Round {
    constructor(deckDetails) {
        this.deck = deckDetails;
        this.turnCount = 0;
        this.incorrectGuesses = [];
    }

    returnCurrentCard() {
        return this.deck.cards[this.turnCount];
    }

    takeTurn(guess) {
        const turn = new Turn(guess, this.returnCurrentCard());
        if (!turn.evaluateGuess()) {
            this.incorrectGuesses.push(this.returnCurrentCard().id);
        } 
        this.turnCount++;
        return turn.giveFeedback();
    }

    calculatePercentCorrect() {
      const difference = (this.turnCount - this.incorrectGuesses.length);
      return Math.floor((difference / this.turnCount) * 100);
    }

    endRound() {
        const message = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
        console.log(message);
        return message;
    }
};
module.exports = Round;