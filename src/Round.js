const Turn = require('../src/Turn');

class Round {
    constructor(deckDetails) {
        this.deck = deckDetails;
        this.turnCount = 0;
        this.incorrectGuesses =[];
        this.currentCard = null       
    }

    returnCurrentCard() {
        return this.deck.cards[this.turnCount]// the card is whatever the turn count is!
    }

    takeTurn(guess) {
        const turn = new Turn(guess, this.returnCurrentCard())
        //keep track of current card
        if(turn.evaluateGuess()) {
            this.turnCount++
            return turn.giveFeedback()
        } else {
            this.incorrectGuesses.push(this.returnCurrentCard().id)
            this.turnCount++
            return turn.giveFeedback()
        }
    }
//math.floor
    calculatePercentCorrect() {
    //     console.log('incorrectGames: ', this.incorrectGuesses.length)
    //     console.log('turnCount: ', this.turnCount)
    //    console.log('subtract: ', this.turnCount - this.incorrectGuesses.length)
      let difference = (this.turnCount - this.incorrectGuesses.length)
      let percentage = Math.floor((difference / this.turnCount) * 100)
    //   console.log('difference: ', difference)
    //   console.log('percentage', percentage)
        return percentage
       }
 

    endRound() {
       const message = '** Round over! ** You answered 66% of the questions correctly!'
       console.log(message)
       return message
    }
}

module.exports = Round