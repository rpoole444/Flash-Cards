class Turn {
    constructor(guess, currentCard) {
        this.guess = guess;
        this.currentCard = currentCard
        this.correctGuess = null
    }

returnGuess() {
        return this.guess
}

returnCard() {
    return this.currentCard
}

evaluateGuess() {
    if(this.guess === this.currentCard.correctAnswer){
        this.correctGuess = true
        return true
    } else {
        this.correctGuess = false
        return false
    }
}

giveFeedback() {
    if(this.evaluateGuess()){
        return 'correct!'
    } else {
        return 'incorrect!'
    }
}
}

module.exports = Turn;