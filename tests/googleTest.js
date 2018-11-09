var https = require('https');

module.exports = {

    '@tags': ['test'],

    'Google': function(client) {
        client
            .url('https://www.google.com/ncr')
            .waitForElementVisible('body', 1000)
            .setValue('input[type=text]', 'TestingBot\n')
            .pause(1000)
            .assert.title('TestingBot - Google Search')
            .end();
    },

    afterEach: function(client, done) {
        client.customTestingBotEnd();

        setTimeout(function() {
            done();
        }, 1000);
    }
};
