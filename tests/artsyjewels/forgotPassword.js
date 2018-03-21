var utils = require('../../pages/utils');

module.exports = {
    tags: ['forgotPassword'],

    before: function(client) {
        utils(client).openBrowser();
    },
    'Go to the Login page': function(client) {
        utils(client).loginButton();
    },
    'Forgot password': function(client) {
        utils(client).forgotPassword();
    },
    after: function(client) {
        utils(client).closeBrowser();
    }
}