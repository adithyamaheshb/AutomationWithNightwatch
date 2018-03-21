module.exports = {
    tags: ['helloworldclick'],
    'We are going to click and click on a button': function (client) {
        client
        .url('https://clickclickclick.click')
        .waitForElementVisible('body', 20000)
        .click('body > main > div > div:nth-child(1) > a')
        .pause(20000)
        .end();
        console.log('hello world click');
    }
}