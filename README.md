[![NodeJS Tests](https://github.com/testingbot/nightwatch-example/actions/workflows/test.yml/badge.svg)](https://github.com/testingbot/nightwatch-example/actions/workflows/test.yml)

## TestingBot - NightWatch Example

TestingBot offers an online grid of browsers and mobile devices for running automated tests using Nightwatch.
This example repository demonstrates how to use Nightwatch to execute tests in parallel across multiple browsers on TestingBot.

### Environment Setup

1. Global Dependencies
    * Install [Node.js](https://nodejs.org/en/)
    * Or Install Node.js with [Homebrew](http://brew.sh/)
    ```
    $ brew install node
    ```
2. TestingBot Credentials
    * In the terminal export your TestingBot Credentials as environmental variables:
    ```
    $ export TESTINGBOT_KEY=<your TestingBot Key>
    $ export TESTINGBOT_SECRET=<your TestingBot Secret>
    ```
3. Project Dependencies
    * Install Node modules
    ```
    $ npm install
    ```

### Running Tests

* Run one test:
    ```
    $ npm run single
    ```

* Tests in Parallel:
    ```
    $ npm run parallel
    ```

You will see the test result in the [TestingBot Dashboard](https://testingbot.com/members/)

### Resources
##### [TestingBot Nightwatch Documentation](https://testingbot.com/support/getting-started/nightwatch.html)

##### [SeleniumHQ Documentation](http://www.seleniumhq.org/docs/)

##### [NightWatch Documentation](http://nightwatchjs.org/)
