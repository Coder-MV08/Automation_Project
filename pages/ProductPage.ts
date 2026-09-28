import {Page, Locator} from "playwright-core";
export class ProductPage{
    page: Page;
    productTitle: Locator;
    wallet : Locator;
    walletAddToCart: Locator;
    itemAddedMessage: Locator;
    plusbtn : Locator;
    productCards: Locator;


    constructor(page: Page){
        this.page = page;
        this.productTitle = page.getByRole('heading', {name:'Products'});
        this.wallet = page.getByText('Wallet', {exact:true}); 
        this.walletAddToCart = this.wallet.locator('..').locator('..').locator('..').getByRole('button', {name:'Add to Cart'});
        this.itemAddedMessage =page.getByText('Item added successfully').last();
        
this.plusbtn = this.wallet
  .locator('..')
  .locator('..')
  .locator('..')
  .getByRole('button', { name: '+', exact: true });
      this.productCards = page.locator('h2').locator('..').locator('..');
    }
 async navigateToProductPage(){
    await this.page.goto('https://www.automationpracticehub.com/products');
 }
 async addToCart(){
    await this.walletAddToCart.click();
 }

async setProductQuantity(quantity: number) {
    const requiredClicks = quantity - 1;

    for (let i = 0; i < requiredClicks; i++) {
        await this.plusbtn.click();
    }
}

async getAvailableProductNames(): Promise<string[]> {
    return this.productCards
    .filter({has: this.page.getByText('Available', {exact: true})})
      .locator('h2')
      .allTextContents();
}

async addProductToCart(productName: string) {
    const cartLink = this.page.getByRole('link', {name: /^Cart(?:\s+\d+)?$/});
    const currentCount = Number((await cartLink.innerText()).match(/\d+/)?.[0] ?? 0);
    const productCard = this.productCards.filter({
        has: this.page.getByRole('heading', {name: productName, exact: true})
    });
    await productCard.getByRole('button', {name: 'Add to cart', exact: true}).click();
    await this.page.getByRole('link', {
        name: new RegExp(`^Cart\\s+${currentCount + 1}$`)
    }).waitFor({state: 'visible'});
}
}
