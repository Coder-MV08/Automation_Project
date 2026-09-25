import {Page, Locator} from "playwright-core";
export class CustomerDetailsPage{
    page: Page;
    firstName: Locator;
    lastName: Locator;
    selectCountry: Locator;
    selectState: Locator;
     selectCity: Locator;
    address: Locator;
    postalCode: Locator;
    emailAddress: Locator;
    phoneNumber: Locator;
    continueBtn: Locator;
    constructor(page: Page){
        this.page = page;
        this.firstName = page.getByRole('textbox', {name:'First Name'});
        this.lastName = page.getByRole('textbox', {name:'Last Name'});
        this.selectCountry = page.locator('select:has(option[value="India"])');
        this.selectState = page.locator('select:has(option[value="Delhi"])');
        this.selectCity = page.locator('select').nth(2);
        this.address = page.getByRole('textbox', {name:'Address 1'});
        this.postalCode = page.getByRole('textbox', {name:'Postal Code'});
        this.emailAddress = page.getByRole('textbox', {name:'Email Address'});
        this.phoneNumber = page.getByPlaceholder('Phone');
        this.continueBtn = page.getByRole('button', {name:'Continue'});
    
    }
    async selectCountryAndState(country: string, state: string, city: string){
        await this.selectCountry.selectOption({label: country});
        await this.selectState.selectOption({label: state});
        await this.selectCity.waitFor({ state: 'visible', timeout: 10000 });
        await this.selectCity.selectOption({ label: city, timeout: 10000 });

    }
    async fillCustomerDetails(
        firstName: string,
        lastName: string = 'User',
        address: string = '123 Main St',
        postalCode: string = '110001',
        emailAddress: string = 'testuser@example.com',
        phoneNumber: string = '9999999999'
    ){
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.address.fill(address);
        await this.postalCode.fill(postalCode);
        await this.emailAddress.fill(emailAddress);
        await this.phoneNumber.fill(phoneNumber);
    }
    async proceedToReview(){
        await this.continueBtn.click();
    }
}