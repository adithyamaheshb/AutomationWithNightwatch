module.exports = {
    tags: ['testcase3'],
    'Existing user login': function(client) {
        client
        .url('https://www.artsyjewels.com/')
        .waitForElementVisible('body', 1000)
        .click('#shopify-section-header > div > header > div > div.grid__item.small--one-half.medium-up--one-third.text-right.site-header__icons.site-header__icons--plus > div > a.site-header__account')
        .setValue('#CustomerEmail', 'adithyamaheshbariki@gmail.com')
        .setValue('#CustomerPassword', 'Adithya.596')
        .click('#customer_login > div > input')
        client.saveScreenshot('./screenshots/testcase3.jpg')
        .pause(3000)
        .end();
    }
}