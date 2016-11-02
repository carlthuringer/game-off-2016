/* eslint-env mocha */
let expect = require('chai').expect
let Deck = require('./index')

describe('Deck.Reader', function () {
  it('works', function () {
    expect(new Deck.Reader()).to.be.instanceOf(Deck.Reader)
  })
})
