let builder = require('./builder')
let Deck = require('./Deck')

function build (deckDef) {
  return new Deck(builder(deckDef))
}

module.exports = {
  build: build,
  Deck: Deck
}
