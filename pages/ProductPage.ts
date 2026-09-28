import {Page, Locator} from "playwright-core";
export class ProductPage{
    page: Page;
    productTitle: Locator;
    wallet : Locator;
    walletAddToCart: Locator;
    itemAddedMessage: Locator;
    closeBtn: Locator;
    plusbtn : Locator;
    productCards: Locator;


    constructor(page: Page){
        this.page = page;
        this.productTitle = page.getByRole('heading', {name:'Products'});
        this.wallet = page.getByText('Wallet', {exact:true}); 
        this.walletAddToCart = this.wallet.locator('..').locator('..').locator('..').getByRole('button', {name:'Add to Cart'});
        this.itemAddedMessage =page.getByText('Item added successfully').last();
        this.closeBtn =  this.walletAddToCart.getByRole('button', {name:'Close'});
        
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
      .filter({hasText: 'Available'})
      .locator('h2')
      .allTextContents();
}

async addProductToCart(productName: string) {
    const productCard = this.productCards.filter({
        has: this.page.getByRole('heading', {name: productName, exact: true})
    });
    await productCard.getByRole('button', {name: 'Add to cart', exact: true}).click();
}
}
