/* eslint-env mocha */
let expect = require('chai').expect
let CardGame = require('./index')
let Deck = CardGame.Deck

describe('Deck', function () {
  specify('An empty deck with no cards', function () {
    let deckData = { cards: [ ] }
    let deck = new Deck(deckData)
    expect(deck.cards.length).to.eq(0)
  })

  specify('drawing from A Deck with an Ace of Spades and nothing else yields the ace of spades', function () {
    let deckData = {
      cards: [{
        value: 'A',
        suit: 'Spades'
      }]
    }
    let deck = new Deck(deckData)
    expect(deck.cards.length).to.eq(1)
    let theAce = deck.draw()
    expect(theAce.value).to.eq('A')
    expect(theAce.suit).to.eq('Spades')
  })
})
