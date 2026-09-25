import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.ts';
import { ProductPage } from '../pages/ProductPage.ts';
import { CartPage } from '../pages/CartPage.ts';
import { CustomerDetailsPage } from '../pages/CustomerDetailsPage.ts';
import { ReviewPage } from '../pages/ReviewPage.ts';
import { ContactPage } from '../pages/ContactPage.ts';

test('Contact Page', async ({ page }) => {
  
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.login('sagesyntaxacademy','BuildingExcellence@111');
    await expect(page).toHaveURL('https://www.automationpracticehub.com/home');
    await expect(loginPage.successToast).toBeVisible();

    /* const productPage = new ProductPage(page);
    await productPage.navigateToProductPage();
    await productPage.addToCart();
    await expect(productPage.itemAddedMessage).toBeVisible();
    await page.pause();
    //await productPage.closeMessage();
   
    const cartPage = new CartPage(page);
    await cartPage.navigateToCartPage();
    await cartPage.proceedToCheckout();
    await expect(page).toHaveURL('https://www.automationpracticehub.com/cart/');

    const customerDetailsPage = new CustomerDetailsPage(page);
    await customerDetailsPage.selectCountryAndState('India', 'Delhi','New Delhi');
    await customerDetailsPage.fillCustomerDetails('Test User', '123 Main St', '9999999999');
    
    console.log ("Customer details filled successfully");
    await customerDetailsPage.proceedToReview();
   

  
    const reviewPage = new ReviewPage(page);
  await expect (reviewPage.productName).toHaveText('Wallet');

  await page.pause();
  
  await expect (reviewPage.customerName).toContainText('Test User');
  await expect (reviewPage.customerAddress).toContainText('123 Main St New Delhi');
  await expect(reviewPage.customerPhone).toContainText('9999999999');
  await expect(reviewPage.cutomerStateCountry).toContainText('Delhi / India');
  await expect(reviewPage.items).toContainText('1');
  await expect(reviewPage.Quantity).toContainText('1');
  await expect(reviewPage.Total).toContainText('₹2,105')
  await reviewPage.placeOrder()
  //await expect (reviewPage.PlaceOrderBtn).toBeEnabled;*/
  
  const contactPage = new ContactPage(page);
  await contactPage.navigateToContactPage()
  await contactPage.fillContactDetails('Medha','test@gmail.com','Hello');
  await contactPage.selectGender('Male');
  //await contactPage.selectAdmin();
  await contactPage.clickCheckBtn();
  await contactPage.clickSubmitBtn();
  await expect(contactPage.successMessage).toBeVisible();
  
});