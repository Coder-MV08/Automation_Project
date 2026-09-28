import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage.ts';
import {ProductPage} from '../pages/ProductPage.ts';

test('Add all available products to cart', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.login('sagesyntaxacademy', 'BuildingExcellence@111');
    await expect(page).toHaveURL('https://www.automationpracticehub.com/home');
    await expect(loginPage.successToast).toBeVisible();

    const productPage = new ProductPage(page);
    await productPage.navigateToProductPage();
    const availableProducts = await productPage.getAvailableProductNames();

    for (const productName of availableProducts) {
        await productPage.addProductToCart(productName);
    }

    await expect(page.getByRole('link', {
        name: new RegExp(`^Cart\\s+${availableProducts.length}$`)
    })).toBeVisible();
});