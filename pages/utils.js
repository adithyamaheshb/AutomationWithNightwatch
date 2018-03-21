module.exports = function (client) {
    this.openBrowser = function() {
        client
        .windowMaximize()
        .url('https://www.artsyjewels.com/')
        .waitForElementVisible('body', 1000);
        return client
    };
    this.loginButton = function() {
        client
        .click('#shopify-section-header > div > header > div > div.grid__item.small--one-half.medium-up--one-third.text-right.site-header__icons.site-header__icons--plus > div > a.site-header__account');
        return client
    };
    this.adminLogin = function() {
        client
        .setValue('#CustomerEmail', 'adithyamaheshbariki@gmail.com')
        .setValue('#CustomerPassword', 'Adithya.596')
        .click('#customer_login > div > input');
        return client
    };
    this.forgotPassword = function() {
        client
        .click('#RecoverPassword');
        }
    this.closeBrowser = function() {
        client
        .pause(3000)
        .end();
        return client
    }
    return this;
}