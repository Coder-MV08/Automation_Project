import {Locator, Page} from "playwright-core";
export class OutOfStockProductPage{
    page: Page;
    outOfStockMessage: Locator;
    laptop : Locator;
    addToCartBtn: Locator;
    laptopAddToCart: Locator;
    itemUnavailable: Locator;
    closeBtn: Locator;

    
    constructor(page: Page){
        this.page = page;
        this.outOfStockMessage = page.getByText('Out of Stock');
        this.laptop = page.getByText('Laptop', {exact:true});
        this.addToCartBtn = this.laptop.locator('..');
        this.laptopAddToCart = this.addToCartBtn.getByRole('button', {name:'Add to Cart'});
        this.itemUnavailable = page.getByText('Item is currently unavailable');
        this.closeBtn = page.getByRole('button', {name:'Close'});
    }

    async navigateToOutOfStockProductPage(){
        await this.page.goto('https://www.automationpracticehub.com/products');
    }

    async addToCart(){
        await this.laptopAddToCart.click();
    }
    async closeMessage(){
        await this.closeBtn.click();
    }
}