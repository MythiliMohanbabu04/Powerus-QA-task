# Powerus-QA-task
**Tool used to Automate **: Cypress version 12.13.0

**Programming Langauge** : TypeScript

**Type of Framework** : Page object model and data driven framework.

**POM**: As per the page object model, I have maintained a class for every web element. Each web element has a separate class which holds functionalities and members of that web page.

**Packages**: Cypress has inbuild packages like fixtures where we can use for test data,support to maintain our page objects,integrations to have our spec files.

**Plugins used**: Faker.js is used to generate fake phone numbers.

**Package.json file**: This will help to make it easy for others to manage and install the npm.

**Advantages of Cypress**

Cypress automation is simple to setup.
Faster test execution
We can debug dircetly with developer tools.
Combines functional testing with API inspection.
Videos or Screenshots– View screenshots are taken automatically on collapse and videos of your complete test

**Note** : Didn't connect the test with Cypress Dashboard due to data privacy concerns

**Running the Test**
Pre-requisite - Need cypress and nodejs installed

**open terminal on the test folder path and enter**

        npx cypress open

A test runner will open then you can find all your test folders on left side ,just click **automationtasks.spec.ts**

A new chrome window opens and test run on it

**Run & Generate Report:**

        npx cypress run --headed --browser chrome

**To run headless:**
                                
        npm run test --headless
