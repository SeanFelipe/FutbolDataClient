const { Builder, By, Key, until } = require('selenium-webdriver')

const driver = new Builder().forBrowser('chrome').build()
const base = 'http://localhost:3000'

describe("Splash Page", function() {
  it("starts", async function() {
    console.log("starting Splash Page test")

    await driver.get(base)
    driver.debug()

  })
})
