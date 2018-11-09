exports.command = function(callback) {
    var TestingBot = require("testingbot-api");

    var tb = new TestingBot({
        api_key: process.env.TB_KEY,
        api_secret: process.env.TB_SECRET
    });

    var sessionid = this.capabilities['webdriver.remote.sessionid'],
        jobName = this.currentTest.name,
        passed = this.currentTest.results.testcases[jobName].failed === 0;


    console.log("TestingBotSessionId=" + sessionid);

	var self = this
	tb.updateTest(sessionid, {
        'test[success]': passed,
        'test[name]': jobName
	}, function () {
    	self.end(callback)
	});
};