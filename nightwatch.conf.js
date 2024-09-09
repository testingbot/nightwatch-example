const additonalEnvironments = require("./environments");

if (!additonalEnvironments.test_settings)
  additonalEnvironments.test_settings = {};

const testingBotOptions = {
  'tb:options' : {
    "build" : "nightwatch-example",
    "name" : "Nightwatch Example Test",
    "seleniumVersion" : "4.24.0",
    username: '${TESTINGBOT_KEY}' || 'YOUR_USERNAME',
    accessKey: '${TESTINGBOT_SECRET}' || 'YOUR_ACCESS_KEY',
  },
}

const testingBot = {
  webdriver: {
    start_process: false,
    timeout_options: {
      timeout: 120000,
      retry_attempts: 3
    },
    keep_alive: true
  },

  selenium: {
    host: 'hub.testingbot.com',
    port: 443
  },

  desiredCapabilities: {
    browserName: 'chrome',
    ...testingBotOptions
  }
}

const nightwatchConfigs = {
  src_folders: ['tests'],
  custom_commands_path: 'custom_commands',
  output_folder: 'reports',
  live_output: true,

  test_settings: {
    default: {
      launch_url: 'https://nightwatchjs.org'
    },

    "testingbot.chrome": {
      ...testingBot,
      desiredCapabilities:{
        browserName: 'chrome',
        ...testingBotOptions
      }
    },
    "testingbot.firefox": {
      ...testingBot,
      desiredCapabilities:{
        browserName: 'firefox',
        ...testingBotOptions
      }
    },
    "testingbot.edge": {
      ...testingBot,
      desiredCapabilities:{
        browserName: 'Edge',
        ...testingBotOptions
      }
    }
  }
}

for (let key in additonalEnvironments.test_settings) {
  nightwatchConfigs.test_settings[key] = {
    ...testingBot,
    ...additonalEnvironments.test_settings[key]
  };
}

module.exports = nightwatchConfigs;