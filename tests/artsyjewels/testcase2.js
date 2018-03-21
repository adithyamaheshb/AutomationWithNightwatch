//Clicking on the search box and entering some value and then press ENTER

module.exports = {
    tags: ['testcase2'],
    'Search functionality should be working': function(client) {
        client
        .url('https://www.artsyjewels.com/')
        .waitForElementVisible('body', 1000)
        .setValue('#shopify-section-header > div > header > div > div.grid__item.small--hide.medium-up--one-third > div > form > input', ['silver bracelets', client.Keys.ENTER])
        .pause(5000)
        .end();
    }
}