import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage.ts';
import {ProductPage} from '../pages/ProductPage.ts';
import {CartPage} from '../pages/CartPage.ts';
import {CustomerDetailsPage} from '../pages/CustomerDetailsPage.ts';
import {ReviewPage} from '../pages/ReviewPage.ts';

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

    const cartPage = new CartPage(page);
    await cartPage.navigateToCartPage();
    const cartProducts = await cartPage.getCartProductNames();

    expect(cartProducts).toHaveLength(availableProducts.length);
    expect(cartProducts).toEqual(expect.arrayContaining(availableProducts));

    for (const productName of availableProducts) {
        await expect.poll(() => cartPage.getProductQuantity(productName)).toBe(1);
    }

    await cartPage.proceedToCheckout();

    const customerDetailsPage = new CustomerDetailsPage(page);
    await customerDetailsPage.selectCountryAndState('India', 'Delhi', 'New Delhi');
    await customerDetailsPage.fillCustomerDetails(
        'Test',
        'User',
        '123 Main St',
        '110001',
        'testuser@example.com',
        '9999999999'
    );
    await customerDetailsPage.proceedToReview();

    const reviewPage = new ReviewPage(page);
    await expect(page.getByRole('heading', { name: 'Review Your Order' })).toBeVisible({ timeout: 10000 });
    await reviewPage.placeOrder();
    await expect(page).toHaveURL(/\/success\/?$/, { timeout: 20000 });
    await expect(page.getByText(/Order Placed/i)).toBeVisible({ timeout: 15000 });
});