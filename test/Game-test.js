const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Round = require("../src/Round");
const Game = require("../src/Game");

describe("Game", () => {
  let card1;
  let card2;
  let card3;
  let deck;
  let game;

  beforeEach(() => {
    round = new Round();
    card1 = new Card(
      1,
      "what is your favorite animal?",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    card2 = new Card(
      2,
      "What is a comma-separated list of related values?",
      ["array", "object", "function"],
      "array"
    );
    card3 = new Card(
      3,
      "What type of prototype method directly modifies the existing array?",
      ["mutator method", "accessor method", "iteration method"],
      "mutator method"
    );
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
    game = new Game(round);
  });

  it("should be a function", () => {
    expect(Game).to.be.a("function");
  });

  it("should be an instance of Game", () => {
    expect(game).to.be.an.instanceOf(Game);
  });

  it("should be able to have a current round", () => {
    expect(game.currentRound).to.equal(round);
  });

  it("should be able to create cards", () => {
    expect(game.createCards().length).to.equal(30);
  });

  it("should be able to put cards in a deck", () => {
    expect(game.createDeck()).to.deep.equal(new Deck(game.createCards()));
  });

  it("should be able to create a new Round using the Deck", () => {
    expect(game.createRound()).to.deep.equal(new Round(game.createDeck()));
  });
});
