# Party Trading Card Game (Working Title)

This is a digital implementation of a game I hope to produce. I want to use the digital version to prototype and playtest.

The primary technologies used will be [Node.js](https://nodejs.org/en/download/), [Electron](http://electron.atom.io) and [Elm](http://elm-lang.org).

This is for the November Github Game Jam! I want to try to get a MVP put together before the end of the month, but I won't draw the line there.

## To Use

DEVELOPERS ONLY. There's nothing here for you to see yet, no game, and if you're not a developer just installing all these things might give you a headache!

To clone and run this repository you'll need [Git](https://git-scm.com) and  (which comes with [npm](http://npmjs.com)) installed on your computer, and the [Elm](https://guide.elm-lang.org/get_started.html) runtime. I'm also using the [Yarn Package Manager](https://yarnpkg.com) because why not.

From your command line:

```bash
# Clone this repository
git clone https://github.com/carlthuringer/game-off-2016.git
# Go into the repository
cd game-off-2016
# Install dependencies
yarn
# Run the app
yarn start
# Run tests
yarn test
```

## TODO

 - [x] Basic JSON deck specification.
 - [x] Set up Mocha test framework and TDD some card file reading.
 - [x] Inject some card data, instantiate some cards.
 - [x] Switch to TypeScript for the backend
 - [x] Deck Data supports copies of defined cards.j
 - [ ] Bootstrap Frontend (Elm, Webpack)
 - [ ] Hello World with Backend-Frontend communication
 - [ ] Backend-Frontend communication with WebSocket?!
 - [ ] JSON file format specification for the decks, types of cards, configuration, and quantity.
 - [ ] The backend creates a deck from a JSON file specifying the deck.
 - [ ] A player can draw a card from a deck tracked on the backend.
 - [ ] A player can start a new game, resulting in a new set of decks.
 - [ ] Another player can be in the game.
 - [ ] The player can initiate a trade session with the other player.
 - [ ] Cards can be added to the offer by either player
 - [ ] Players can indicate they accept the offer
 - [ ] The offer is completed and players hands are updated correctly with the new cards.
 - [ ] The game has multiple phases.
 - [ ] The phase advances automatically after a fixed time
 - [ ] The game has a different mode between phases...
 - [ ] More to come...

## `Deck` specification

Describes a deck of cards.

| field    | type      | description                                                                                 |
|----------|-----------|---------------------------------------------------------------------------------------------|
| cards | `Array<CardDefinition>` | An array of `CardDefinition` objects. |


## `CardDefinition` specification
Describes one class of card.

| field    | type      | description                                                                                 |
|----------|-----------|---------------------------------------------------------------------------------------------|
| type     | `String`  | A string describing a type of card. All cards of this type should have the same attributes. |
| quantity | `Optional Integer` | How many copies of this card to insert into the deck.                                       |
| permutations | `Optional Array<Array<String>>` | An Array of Arrays which will be combined to produce all permutations of the arrays. |

## "Resources" card type
Resources are the principle currency of the game. Each resources card can have a number of resources on it. There is no restriction on repeated resources or number that can be present on a card (at this time).

| field | type | description |
|---|---|---|
| title | `String` | The name of the resource card |
| resources | `Array<Resource>` | An array of Resource tokens |

## Decisions

### Card and Deck System
At first I was working on a very flexible model of defining cards, to the point where you would be able to define an entire poker deck with a single card definition. While defining a card as a permutation is advantageous for poker, it doesn't help much with the kind of game I'm planning on making, where there will definitely be copies of cards and a great variety of carefully specified cards, rather than a perfect set of unique combinations.

It's actually a bit more important for cards to have distinct Types which inform the application on how they interact with one another, and which cards are valid for which operations. For example, resource cards have three `resource` slots, and they have a `resources` function which returns an array of all available resources concatenated. This can be used to quickly total up the resources in a player's hand and enable them to make purchases or score goals later. 

### TypeScript

This leads me to a decision to convert to TypeScript. I want the power to handle cards generically in some cases, such as shuffling, but in other cases they should be handled by type. While some of this can be accomplished by putting a type attribute on the card object in Javascript, I get more abilities with a strongly typed language like TypeScript. For example, when building cards I can structurally type them as quantityCardDefinition or singleCardDefinition and build them appropriately (by looping or just pushing a single card onto the card collection)

Also, I've been having a lot of pretty tedious and annoying trouble with basic type errors, trial and error. Even with mocha constantly rebuilding, I have to console log and inspect to figure out that I'm returning a function and not an object because I returned a reference instead of calling the function. This kind of problem would be obvious and potentially impossible in TypeScript.

#### License [Apache 2.0](LICENSE.txt)
