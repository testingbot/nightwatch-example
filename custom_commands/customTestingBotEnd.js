exports.command = function(callback) {
	const TestingBot = require("testingbot-api");

	const tb = new TestingBot({
		api_key: process.env.TESTINGBOT_KEY,
		api_secret: process.env.TESTINGBOT_SECRET
	});

	const sessionid = this.capabilities['webdriver.remote.sessionid'],
		jobName = this.currentTest.name,
		passed = this.currentTest.results.testcases[jobName].failed === 0;


	console.log("TestingBotSessionId=" + sessionid);

	tb.updateTest({
		'test[success]': passed,
		'test[name]': jobName
	}, sessionid, () => {
		this.end(callback)
	});
};
