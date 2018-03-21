module.exports = {
    tags: ['google'],
    'Demo test Google' : function (client) {
         client 
         .url('http://www.google.com') // Go to a url
         .waitForElementVisible('body', 1000) // wait till page loads
         .assert.title('Google') // Make sure Site title matches
         .click('#gbqfbb')
         .click('#tsf > div.tsf-p > div.jsb > center > div')
         .pause(5000)
         .end();
       }
 };