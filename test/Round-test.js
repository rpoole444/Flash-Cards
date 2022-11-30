const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
        let card1;
        let card2;
        let card3;
        let deck;
    beforeEach(() =>{
        card1 = new Card(1, 'what is your favorite animal?', ['sea otter', 'pug', 'capybara'], 'sea otter')
        card2 = new Card( 2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
        card3 = new Card( 3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")
        deck = new Deck([card1, card2, card3])
    });

    it('should be a function', function() {
        expect(Round).to.be.a('function')
    });

    it('should be an instance of Round', function() {
        const round = new Round()
        expect(round).to.be.an.instanceOf(Round)
    });

    it('should take a deck of cards', function() {
        const round1 = new Round(deck)
        expect(deck.cards).to.deep.equal([card1, card2, card3])
    });

    it('should return the current card being played', () => {
        const round2 = new Round(deck)
        
        expect(round2.returnCurrentCard()).to.equal(card1)
    });

    it('should be able to increment the turn count with a turn', () => {
        const round2 = new Round(deck)
        expect(round2.turnCount).to.equal(0);
        round2.takeTurn();
        expect(round2.turnCount).to.equal(1);
    });

    // it('should create an instance of turn', function() {
    //     const turn = new Turn()
    //     expect(turn).to.be.an.instanceOf(Turn)
    // });

    it('should change to next card after a turn', () => {
        const round2 = new Round(deck);
        expect(round2.returnCurrentCard()).to.equal(card1);
        round2.takeTurn();
        expect(round2.returnCurrentCard()).to.equal(card2);
    });

    it('should add to the array of incorrect guesses if the guess is incorrect', () => {
        const round2 = new Round(deck);
        expect(round2.incorrectGuesses).to.deep.equal([]);
        round2.takeTurn('hot dog');
        expect(round2.incorrectGuesses).to.deep.equal([card1.id]);
    });

    it('should provide appropriate feedback per guess', () => {
        const round2 = new Round(deck);
        expect(round2.takeTurn('hot dog')).to.equal('incorrect!')
        expect(round2.takeTurn('array')).to.equal('correct!')
    });

    it('should calculate and return the percentage of correct guesses', () => {
        const round2 = new Round(deck);

        expect(round2.takeTurn('hot dog')).to.equal('incorrect!')
        expect(round2.calculatePercentCorrect()).to.equal(0)

        expect(round2.takeTurn('array')).to.equal('correct!')
        expect(round2.calculatePercentCorrect()).to.equal(50)
        
    });

    it('should end round with printed statement saying the round is over', () => {
        const round2 = new Round(deck);
        const message = '** Round over! ** You answered 66% of the questions correctly!'
        expect(round2.takeTurn('hot dog')).to.equal('incorrect!')
        expect(round2.takeTurn('array')).to.equal('correct!')
        expect(round2.takeTurn('mutator method')).to.equal('correct!')
        expect(round2.calculatePercentCorrect()).to.equal(66)
        expect(round2.endRound()).to.equal(message)
    });
});