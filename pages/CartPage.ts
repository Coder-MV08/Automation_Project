import { Locator, Page } from "playwright-core";

export class CartPage {
    page: Page;
    checkoutBtn: Locator;
    cartLink: Locator;
    cartItems: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkoutBtn = page.getByRole('button', { name: 'Checkout' });
        this.cartLink = page.getByRole('link', { name: /Cart/ });
        this.cartItems = page.locator('h2').locator('..').locator('..');
    }

    async navigateToCartPage() {
        await this.cartLink.click();
    }

    async proceedToCheckout() {
        await this.checkoutBtn.click();
    }

    async getCartProductNames(): Promise<string[]> {
        return this.cartItems.locator('h2').allTextContents();
    }

    async getProductQuantity(productName: string): Promise<number> {
        const cartItem = this.cartItems.filter({
            has: this.page.getByRole('heading', {name: productName, exact: true})
        });
        const quantityText = await cartItem.getByText(/^Qty:\s*\d+$/).innerText();
        return Number(quantityText.match(/\d+/)?.[0]);
    }
}
