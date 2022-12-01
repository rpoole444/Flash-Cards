const Turn = require('../src/Turn');

class Round {
    constructor(deckDetails) {
        this.deck = deckDetails;
        this.turnCount = 0;
        this.incorrectGuesses =[];
    };

    returnCurrentCard() {
        return this.deck.cards[this.turnCount];// the card is whatever the turn count is!
    };

    takeTurn(guess) {
        const turn = new Turn(guess, this.returnCurrentCard());
        if(turn.evaluateGuess()) {
            this.turnCount++
            return turn.giveFeedback();
        } else {
            this.incorrectGuesses.push(this.returnCurrentCard().id);
            this.turnCount++
            return turn.giveFeedback();
        };
    };

    calculatePercentCorrect() {
      let difference = (this.turnCount - this.incorrectGuesses.length);
      let percentage = Math.floor((difference / this.turnCount) * 100);
        return percentage;
       };

    endRound() {
       const message = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
       console.log(message);
       return message;
    };
};
module.exports = Round;