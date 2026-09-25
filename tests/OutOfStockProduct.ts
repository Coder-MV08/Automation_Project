import{test,expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage.ts';
import {OutOfStockProductPage} from '../pages/OutOfStockProductPage.ts';
import { ProductPage } from '../pages/ProductPage.ts';
test('Verify out of stock product message', async ({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.login('sagesyntaxacademy','BuildingExcellence@111');
    await expect(page).toHaveURL('https://www.automationpracticehub.com/home');
    await expect(loginPage.successToast).toBeVisible(); 

     const productPage = new ProductPage(page);
        await productPage.navigateToProductPage();
        await productPage.addToCart();
        await expect(productPage.itemAddedMessage).toBeVisible();

    const outOfStockProductPage = new OutOfStockProductPage(page);
    await outOfStockProductPage.navigateToOutOfStockProductPage();
    await outOfStockProductPage.addToCart();
    await expect(outOfStockProductPage.itemUnavailable).toBeVisible();
    await outOfStockProductPage.closeMessage();
})
