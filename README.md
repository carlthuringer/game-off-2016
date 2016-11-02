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
npm start
```

## TODO

 - [] Basic JSON deck specification.
 - [] JSON file format specification for the decks, types of cards, configuration, and quantity.
 - [] The backend creates a deck from a JSON file specifying the deck.
 - [] A player can draw a card from a deck tracked on the backend.
 - [] A player can start a new game, resulting in a new set of decks.
 - [] Another player can be in the game.
 - [] The player can initiate a trade session with the other player.
 - [] Cards can be added to the offer by either player
 - [] Players can indicate they accept the offer
 - [] The offer is completed and players hands are updated correctly with the new cards.
 - [] The game has multiple phases.
 - [] The phase advances automatically after a fixed time
 - [] The game has a different mode between phases...
 - [] More to come...

#### License [Apache 2.0](LICENSE.txt)
