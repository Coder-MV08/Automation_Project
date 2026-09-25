import {test, expect} from '@playwright/test';
import { ProductPage } from '../pages/ProductPage.ts';
import { LoginPage } from '../pages/LoginPage.ts';
import { CartPage } from '../pages/CartPage.ts';
test ('Add wallet to cart and proceed to checkout', async ({ page }) => {
        const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.login('sagesyntaxacademy','BuildingExcellence@111');
    await expect(page).toHaveURL('https://www.automationpracticehub.com/home');
    await expect(loginPage.successToast).toBeVisible();

     const productPage = new ProductPage(page);
    await productPage.navigateToProductPage();
    await productPage.addToCart();
    await expect(productPage.itemAddedMessage).toBeVisible();
   //wait productPage.closeMessage();
   
    const cartPage = new CartPage(page);
    await cartPage.navigateToCartPage();
    await cartPage.proceedToCheckout();
    await expect(page).toHaveURL("https://www.automationpracticehub.com/cart/");
});