import { Builder } from './builder'
import { Deck } from './Deck'

export function build (deckDef) {
  return new Deck(Builder(deckDef))
}
