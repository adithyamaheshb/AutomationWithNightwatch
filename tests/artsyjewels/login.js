var utils = require('../../pages/utils');

module.exports = {
    tags: ['login'],

    before: function(client) {
        utils(client).openBrowser();
    },
    'Go to the Login page': function(client) {
        utils(client).loginButton();
    },
    'Login as Admin': function(client) {
        utils(client).adminLogin();
    },
    after: function(client) {
        utils(client).closeBrowser();
    }
}