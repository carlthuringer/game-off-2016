/* eslint-env mocha */
import { expect } from 'chai'
import { build } from './CardGame'

describe('Deck', function () {
  specify('An empty deck with no cards', function () {
    let deckData = { cards: [ ] }
    let deck = build(deckData)
    expect(deck.cards.length).to.eq(0)
  })

  specify('drawing from A Deck with an Ace of Spades and nothing else yields the ace of spades', function () {
    let deckData = {
      cards: [{
        value: 'A',
        suit: 'Spades'
      }]
    }
    let deck = build(deckData)
    expect(deck.cards.length).to.eq(1)
    let theAce = deck.draw()
    expect(theAce.value).to.eq('A')
    expect(theAce.suit).to.eq('Spades')
  })

  specify('Deckdata specifying a quantity of cards fills the deck with that many copies of the card', function () {
    let deckData = {
      cards: [{
        value: 'A',
        quantity: 4
      }]
    }
    let deck = build(deckData)
    expect(deck.cards.length).to.eq(4)
    for (let i = 0; i < 4; i++) {
      expect(deck.draw().value).to.eq('A')
    }
  })
})
