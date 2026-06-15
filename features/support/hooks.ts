import { BeforeStep, AfterStep, Before, After, BeforeAll, AfterAll, Status } from '@cucumber/cucumber'

let tmp;
// Synchronous
Before(function () {
    this.count = 0;
    console.log("Before hook for test case:");
});

// Asynchronous callback-style logic adapted to Cucumber's Promise-based hook API
BeforeAll(function () {
    console.log("Before all tests hook:");
});

AfterAll(function () {
    console.log("After all tests hook:");
});

// Asynchronous Promise
After(function () {
    console.log("After hook for test case:");
});

BeforeStep(function () {
    console.log("Before step hook:");
});

AfterStep(function ({ result }) {
    // This hook will be executed after all steps, and take a screenshot on step failure
    if (result.status === Status.FAILED) {
        console.log("After step hook: Step failed, taking screenshot...");
    }
});

Before({ tags: '@Regression' }, async function () {
    console.log('Runs only for Regression scenarios');
});

After({ tags: '@tagstest' }, async function () {
    console.log('Runs only for tagstest scenarios');
});