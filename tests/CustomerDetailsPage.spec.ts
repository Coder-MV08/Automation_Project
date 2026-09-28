import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.ts';
import {ProductPage} from '../pages/ProductPage.ts';
import { CartPage } from '../pages/CartPage.ts';
import { CustomerDetailsPage } from '../pages/CustomerDetailsPage.ts';  
test('fill customer details and proceed to checkout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.login('sagesyntaxacademy','BuildingExcellence@111');
    await expect(page).toHaveURL('https://www.automationpracticehub.com/home');
    await expect(loginPage.successToast).toBeVisible();

     const productPage = new ProductPage(page);
    await productPage.navigateToProductPage();
    await productPage.addToCart();
    await expect(productPage.itemAddedMessage).toBeVisible();
    //await productPage.closeMessage();
   
    const cartPage = new CartPage(page);
    await cartPage.navigateToCartPage();
    await cartPage.proceedToCheckout();
    await expect(page).toHaveURL('https://www.automationpracticehub.com/cart/');

    const customerDetailsPage = new CustomerDetailsPage(page);
    await customerDetailsPage.selectCountryAndState('India', 'Delhi','New Delhi');
    await customerDetailsPage.fillCustomerDetails(
      'Test',
      'User',
      '123 Main St',
      '110001',
      'testuser@example.com',
      '9999999999'
    );
    console.log ("Customer details filled successfully");
    await customerDetailsPage.proceedToReview();
    await expect(page.getByRole('heading', {name: 'Review Your Order'})).toBeVisible();
  //await page.pause();
  //await expect (page.getByText('Review Your Order',{exact:true})).toBeVisible();


});