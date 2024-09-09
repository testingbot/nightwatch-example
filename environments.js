module.exports = {
  test_settings: {
    default: {},
    env1: {
      desiredCapabilities: {
        "browserName": "Chrome",
        "browserVersion": "latest",
        "platformName": "Windows 11"
      }
    },
    env2: {
      desiredCapabilities: {
        "browserName": "Firefox",
        "browserVersion": "latest",
        "platformName": "Windows 11"
      }
    },
    env3: {
      desiredCapabilities: {
        "browserName": "Safari",
        "browserVersion": "17",
        "platformName": "macOS Sonoma"
      }
    }
  }
};