import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.ts';
import { ContactPage } from '../pages/ContactPage.ts';

test('Invalid Email', async ({ page }) => {
   const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.login('sagesyntaxacademy','BuildingExcellence@111');
    await expect(page).toHaveURL('https://www.automationpracticehub.com/home');
    await expect(loginPage.successToast).toBeVisible();
     const contactPage = new ContactPage(page);
     await contactPage.navigateToContactPage()
  //Invalid Email
   await contactPage.fillContactDetails('Medha','test','Hello');
   await contactPage.selectGender('Male');
  //await contactPage.selectAdmin();
  await contactPage.clickCheckBtn();
  await contactPage.clickSubmitBtn();
  //ait expect(contactPage.emailInput).not.toBeValid();
});

test ('Blank name ' , async ({page} ) => {  
const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.login('sagesyntaxacademy','BuildingExcellence@111');
    await expect(page).toHaveURL('https://www.automationpracticehub.com/home');
    await expect(loginPage.successToast).toBeVisible();
     const contactPage = new ContactPage(page);
     await contactPage.navigateToContactPage() 
      await contactPage.fillContactDetails('   ','test@gmail.com' , 'Hello');
   await contactPage.selectGender('Male');
  await contactPage.clickCheckBtn();
  await contactPage.clickSubmitBtn();
  console.log ('Name is a Mandate field ');




 });