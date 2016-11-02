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

  specify('A Deck with an Ace of Spades and nothing else', function () {
    let deckData = {
      cards: [{
        value: 'A',
        suit: 'Spades'
      }]
    }
    let deck = new Deck(deckData)
    expect(deck.cards.length).to.eq(1)
    let theAce = deck.cards[0]
    expect(theAce.value).to.eq('A')
    expect(theAce.suit).to.eq('Spades')
  })

  specify('drawing from a deck with the jack of clubs in it yields the jack of clubs', function() {
    let deckData = {
      cards: [{
        value: 'J',
        suit: 'Clubs'
      }]
    }
    let deck = new Deck(deckData)
    let theJack = deck.draw()
    expect(theJack.value).to.eq('J')
  })
})
