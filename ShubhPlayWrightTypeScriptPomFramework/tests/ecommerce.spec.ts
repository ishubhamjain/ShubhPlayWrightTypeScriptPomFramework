import { test, expect } from "@playwright/test";
import { HomePage } from '../pageobjects/HomePageTS';


let homePage: HomePage;
let title: string | null;
let shopTitle: string | null;

test('Validate product added to cart', async ({ page }) => {

    homePage = new HomePage(page);
    await homePage.navigate();
     ({ title, shopTitle } = await homePage.addToCart());
     expect(title).toBe(shopTitle);
});