import { Page, Locator } from '@playwright/test';

export class ContactPage {
   page: Page;
   nameInput: Locator;
   emailInput: Locator;
   messageInput: Locator;
   genderInput : Locator;
   adminBtn : Locator;
   submitButton: Locator;
   checkBox: Locator;
   successMessage : Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.getByLabel('Name');
    this.emailInput = page.getByLabel('Email');
    this.messageInput = page.getByLabel('Message');
    this.genderInput = page.locator('select');
    this.adminBtn = page.getByLabel ('Admin')
    this.checkBox = page.getByLabel('Check me if you want to report!')
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.successMessage = page.getByText('successfully submitted');
 }
 async navigateToContactPage(){
    await this.page.goto('https://www.automationpracticehub.com/contact/');
 }
 async fillContactDetails(name : string , email : string , message : string ){
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.messageInput.fill(message);
 }
 async selectGender(gender:string){
    await this.genderInput.waitFor({ state: 'visible', timeout: 5000 });
    await this.genderInput.selectOption({ label: gender });
}
async selectAdmin(){
    await this.adminBtn.check();
}
async clickCheckBtn(){
    await this.checkBox.check();
}
async clickSubmitBtn(){
    await this.submitButton.click();
}
}
