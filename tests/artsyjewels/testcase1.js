//Opening artsyjewels.com and clicking on All rings in Jewelry dropdown.

module.exports = {
    tags: ['testcase1'],
    'Open homepage and click on headers': function (client) {
        client
        .url('https://www.artsyjewels.com')
        .waitForElementVisible('body', 1000)
        .assert.title('Artsyjewels- High quality fashion jewelry at a reasonable price')
        .click('#SiteNav > li.site-nav--has-dropdown.site-nav--has-centered-dropdown > a')
        .click('#SiteNavLabel-jewelry > div > div > div:nth-child(1) > ul:nth-child(2) > li > a')
        .end();
    }
}