const https = require('https');

module.exports = {
    '@tags': ['test'],

    'Google': function(client) {
        client
            .url('https://testingbot.com')
            .waitForElementVisible('body', 1000)
            .assert.textContains('body', 'TestingBot')
            .end();
    },

    afterEach: function(client, done) {
        client.customTestingBotEnd();
        done();
    }
};
