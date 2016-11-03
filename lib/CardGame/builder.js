module.exports = function Builder (deckData) {
  let cards = []
  for (let cardDef of deckData.cards) {
    if (cardDef.hasOwnProperty('quantity')) {
      for (let i = 0; i < cardDef.quantity; i++) {
        cards.push(cloneCard(cardDef, ['quantity']))
      }
    } else {
      cards.push(cloneCard(cardDef))
    }
  }

  return {
    cards: cards
  }
}

function cloneCard (card, dropList) {
  if (typeof dropList === 'undefined') dropList = []
  let newCard = Object.assign({}, card)
  for (let prop in dropList) {
    delete newCard[prop]
  }
  return newCard
}
