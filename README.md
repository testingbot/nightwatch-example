## TestingBot - NightWatch Example

TestingBot provides an online grid of browsers and mobile devices to run Automated tests on via Selenium WebDriver.
This example demonstrates how to use NightWatwch to run a test in parallel across several browsers.

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
    $ export TB_KEY=<your TestingBot Key>
    $ export TB_SECRET=<your TestingBot Secret>
    ```
3. Project Dependencies
    * Install Node modules
    ```
    $ npm install
    ```



### Running Tests

* Tests in Parallel:
    ```
    $ ./node_modules/.bin/nightwatch -e chrome,firefox,internet_explorer_edge tests
    ```

You will see the test result in the [TestingBot Dashboard](https://testingbot.com/members/)

### Resources
##### [TestingBot Documentation](https://testingbot.com/support/getting-started/nightwatch.html)

##### [SeleniumHQ Documentation](http://www.seleniumhq.org/docs/)

##### [NightWatch Documentation](http://nightwatchjs.org/)