import { Given, When, Then } from '@cucumber/cucumber'

Given('open the browser and navigate to the url', function () {
    console.log("Browser opened and navigated to the url");
});

When('click on the tag {string}', function (string) {
  console.log("Tag clicked: " + string);
});

Then('validate the products related to the tag {string} are displayed', function (string) {
  console.log("Validating products for tag: " + string);
//   return 'pending';
});
