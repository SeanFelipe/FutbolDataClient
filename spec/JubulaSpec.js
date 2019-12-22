const { Builder, By, Key, until } = require('selenium-webdriver')

const driver = new Builder().forBrowser('chrome').build()
const base = 'http://localhost:3000'

describe("Splash Page", function() {
  it("starts", async function() {
    console.log("starting Splash Page test")

    await driver.get(base)
  })
  /*
  beforeEach(function() {

  var Player = require('../../lib/jasmine_examples/Player');
  var Song = require('../../lib/jasmine_examples/Song');
  var player;
  var song;

    it("should be able to play a Song", function() {
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher
    expect(player).toBePlaying(song);
  });
  */
})
