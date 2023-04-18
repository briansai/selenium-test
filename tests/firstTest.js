const { Builder } = require('selenium-webdriver');

async function example() {
  // launch the browser
  const driver = await new Builder().forBrowser('chrome').build();

  // navigate to our application
  driver.get('https://lambdatest.github.io/sample-todo-app/');
  // add a todo
  // close the browser
}

example();
