const data = require("./data");
const prototypeQuestions = data.prototypeData;
const util = require("./util");

const Card = require("../src/Card");
const Turn = require("../src/Turn");
const Deck = require("../src/Deck");
const Round = require("../src/Round");

class Game {
  constructor(currentRound) {
    this.currentRound = currentRound;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    this.createCards();
    this.createDeck();
    this.createRound();
    this.printMessage(this.createDeck());
    this.printQuestion(this.createRound());
  }

  createCards() {
    const gameCards = prototypeQuestions.map((card) => {
      let cards = new Card(
        card.id,
        card.question,
        card.answers,
        card.correctAnswer
      );
      return cards;
    });
    return gameCards;
  }

  createDeck() {
    let newDeck = new Deck(this.createCards());
    return newDeck;
  }

  createRound() {
    let newRound = new Round(this.createDeck());
    return newRound;
  }
}

module.exports = Game;
