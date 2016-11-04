export class Deck {
  cards: any
  constructor (deckData) {
    this.cards = deckData.cards
  }

  draw () {
    return this.cards.pop()
  }
}
