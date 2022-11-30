const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game')

describe('Game', () => {

    it.skip('should be a function', () => {
        expect(Game).to.be.a('function')
    });

    it.skip('should be an instance of Game', () => {
        const game = new Game()
        expect(game).to.be.an.instanceOf(Game)
    });

    it.skip('should be able to create cards', () => {
        const card = new Card()
    });

    it.skip('should be able to put cards in a deck', () => {

    });

    it.skip('should be able to create a new Round using the Deck', () => {

    });

    it.skip('should print a message', () => {

    });

    it.skip('should print the question', () => {

    });
});