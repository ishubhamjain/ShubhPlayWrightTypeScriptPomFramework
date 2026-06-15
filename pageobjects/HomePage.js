class HomePage {
    constructor(page) {
        this.page = page;
        this.computers = page.locator('a:has-text("COMPUTERS")').first();
        this.notebooks = page.locator('a').filter({ hasText: 'Notebooks' }).first();
        this.productTitle = page.locator("h2[class='product-title'] a").first();
        this.addToCartButton = page.locator('input.button-2.product-box-add-to-cart-button').first();
        this.shoppingCart = page.locator('span:has-text("Shopping cart")');
        this.shopTitle = page.locator("a[class='product-name']").first();
    }

    async navigate() {
        await this.page.goto('https://demowebshop.tricentis.com/');
    }

    async addToCart() {
        await this.computers.hover();
        await this.notebooks.click();
        const title = await this.productTitle.textContent();
        console.log(title);
        await this.addToCartButton.click();
        await this.shoppingCart.click();
        const shopTitle = await this.shopTitle.textContent();
        console.log(shopTitle);
        return { title, shopTitle };
    }
}

module.exports = { HomePage };
