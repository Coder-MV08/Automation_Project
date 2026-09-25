import { Page, Locator } from "@playwright/test";

export class ReviewPage {
    page: Page;
    productName: Locator;
    customerName: Locator;
    customerAddress: Locator;
    cutomerStateCountry: Locator;
    customerPhone: Locator;
    items: Locator;
    Quantity: Locator;
    Total: Locator;
    PlaceOrderBtn: Locator;
    reviewHandling : Locator;
    static customerName: any;

    constructor(page: Page) {
        this.page = page;
        this.reviewHandling = page.getByRole('heading',{name:'Review Your Order'});
        this.productName = page.getByText('Wallet',{exact : true});
      
        this.customerName = page.locator('p').filter({hasText:'Name'});
       
        this.customerAddress = page.getByText('Address:',{exact:true}).locator('..');
        this.cutomerStateCountry = page.getByText('State/Country:',{exact:true}).locator('..');
        this.customerPhone = page.getByText('Phone:',{exact:true}).locator('..');
        this.items = page.getByText('Items:',{exact:true}).locator('..');
        this.Quantity = page.getByText('Quantity:',{exact:true}).locator('..');
        this.Total = page.getByText('Total:',{exact:true}).locator('..');
        this.PlaceOrderBtn = page.getByRole('button', { name: 'Place Order' });
    }
  async placeOrder(){
    await this.PlaceOrderBtn.waitFor({ state: 'visible' });
    await this.PlaceOrderBtn.click();
    await this.page.waitForURL(/\/success\/?$/, { timeout: 20000 });
  }
}