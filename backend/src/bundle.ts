let Elm = require('../elm_src/Main');
let elmapp = Elm.Main.embed(document.getElementById('main'));

// elmapp.hot.subscribe(function (event, context) {
//   console.log('elm-hot event:', event)
//   context.state.swapCount ++
// });