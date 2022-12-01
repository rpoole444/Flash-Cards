const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
        let card1;
        let card2;
        let card3;
        let deck;
        let round;

    beforeEach(() => {
        card1 = new Card(1, 'what is your favorite animal?', ['sea otter', 'pug', 'capybara'], 'sea otter');
        card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        deck = new Deck([card1, card2, card3]);
        round = new Round(deck);
    });

    it('should be a function', function() {
        expect(Round).to.be.a('function');
    });

    it('should be an instance of Round', function() {
        expect(round).to.be.an.instanceOf(Round);
    });

    it('should take a deck of cards', function() {
        expect(deck.cards).to.deep.equal([card1, card2, card3]);
    });

    it('should return the current card being played', () => {
        expect(round.returnCurrentCard()).to.equal(card1);
    });

    it('should be able to increment the turn count with a turn', () => {
        expect(round.turnCount).to.equal(0);
        round.takeTurn();
        expect(round.turnCount).to.equal(1);
    });

    it('should change to next card after a turn', () => {
        expect(round.returnCurrentCard()).to.equal(card1);
        round.takeTurn();
        expect(round.returnCurrentCard()).to.equal(card2);
    });

    it('should add to the array of incorrect guesses if the guess is incorrect', () => {
        expect(round.incorrectGuesses).to.deep.equal([]);
        round.takeTurn('hot dog');
        expect(round.incorrectGuesses).to.deep.equal([card1.id]);
    });

    it('should provide appropriate feedback per guess', () => {
        expect(round.takeTurn('hot dog')).to.equal('incorrect!');
        expect(round.takeTurn('array')).to.equal('correct!');
    });

    it('should calculate and return the percentage of correct guesses', () => {
        expect(round.takeTurn('hot dog')).to.equal('incorrect!');
        expect(round.calculatePercentCorrect()).to.equal(0);

        expect(round.takeTurn('array')).to.equal('correct!');
        expect(round.calculatePercentCorrect()).to.equal(50);
    });

    it('should end game, and send message if the percentage correct is greater than 90%', () => {
     const message = `** Round over! ** You answered 100% of the questions correctly!`;
        expect(round.takeTurn('sea otter')).to.equal('correct!');
        expect(round.takeTurn('array')).to.equal('correct!');
        expect(round.takeTurn('mutator method')).to.equal('correct!');
        expect(round.calculatePercentCorrect()).to.equal(100);
        expect(round.endRound()).to.equal(message);
    });
});