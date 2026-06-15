import { Given, When, Then, Before, After, setDefaultTimeout } from '@cucumber/cucumber'
import { HomePage } from '../../pageobjects/HomePageTS';
import { Browser, BrowserContext, Page, chromium, expect } from "@playwright/test";

let browser: Browser;
let context: BrowserContext;
let page: Page;
let homePage: HomePage;
let title: string | null;
let shopTitle: string | null;

setDefaultTimeout(60 * 1000);


Before(async () => {
    browser = await chromium.launch({
        headless: false,
        args: ['--start-maximized']
    });

    context = await browser.newContext({
        viewport: null
    });
    page = await context.newPage();
});

Given('Open the website', {timeout: 60 * 1000}, async () => {
    // Write code here that turns the phrase above into concrete actions

    homePage = new HomePage(page);
    await homePage.navigate();
});

When('add product to cart', async () => {
    // Write code here that turns the phrase above into concrete actions
    ({ title, shopTitle } = await homePage.addToCart());

});

Then('validate the same product is added to the cart', async () => {
    // Write code here that turns the phrase above into concrete actions
    expect(title).toBe(shopTitle);
});

After(async () => {
    await browser.close();
});