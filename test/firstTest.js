const { Builder, By, Key } = require('selenium-webdriver');
// const assert = require('assert');
const should = require('chai').should();

describe('add todo tests', () => {
  it('successfully adds a todo item to application', async () => {
    // launch the browser
    const driver = await new Builder().forBrowser('chrome').build();

    // navigate to our application
    await driver.get('https://lambdatest.github.io/sample-todo-app/');

    // add a todo
    await driver
      .findElement(By.id('sampletodotext'))
      .sendKeys('Learn Selenium', Key.RETURN);

    // assert
    let todoText = await driver
      .findElement(By.xpath('//li[last()]'))
      .getText()
      .then((val) => {
        return val;
      });

    // assert using node assertion
    // assert.strictEqual(todoText, 'Learn Selenium');

    // assert using chai should
    todoText.should.equal('Learn Selenium');
  });
});
