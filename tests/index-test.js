module.exports = {
  beforeEach: function(browser) {
    browser
      .url('http://127.0.0.1:8080/')
      .waitForElementVisible('body', 1000)
  },
  'Test fade in': function(browser) {
    browser
      .click('.show-content-btn')
      .pause(1001)
      .verify.cssProperty('.content', 'opacity', '1')
      .saveScreenshot('screenshots/fade-in-result.png');
  },
  'Test add calculate': function(browser) {
    browser
      .setValue('.num-to-add-1', '1')
      .setValue('.num-to-add-2', '2')
      .click('.calculate-btn')
      .verify.containsText('.add-result', '3')
      .saveScreenshot('screenshots/calculate-result.png');
  },
  'Test get JSON': function(browser) {
    browser
      .click('.get-json-btn')
      .waitForElementVisible('.name', 1000)
      .verify.containsText('.name:first-child', 'Cliff')
      .verify.containsText('.name:last-child', 'Summers')
      .saveScreenshot('screenshots/get-json-result.png')
      .end();
  }
};
