class Deck {
  constructor (deckData) {
    this.cards = deckData.cards
  }
  
  draw () {
    return this.cards.pop()
  }
}

module.exports = Deck
