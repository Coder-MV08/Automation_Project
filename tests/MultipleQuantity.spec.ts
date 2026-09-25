import{test,expect} from '@playwright/test';
import { ProductPage } from '../pages/ProductPage.ts';
import { LoginPage } from '../pages/LoginPage.ts';
import { CartPage } from '../pages/CartPage.ts';
import { CustomerDetailsPage } from '../pages/CustomerDetailsPage.ts';
import { ReviewPage } from '../pages/ReviewPage.ts';
test ('Add wallet to cart', async ({ page }) => {
      const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.login('sagesyntaxacademy','BuildingExcellence@111');
    await expect(page).toHaveURL('https://www.automationpracticehub.com/home');
    await expect(loginPage.successToast).toBeVisible();
    
    const productPage = new ProductPage(page);
    await productPage.navigateToProductPage();
    await productPage.setProductQuantity(5);
    await productPage.addToCart();
    await expect(productPage.itemAddedMessage).toBeVisible();

     const cartPage = new CartPage(page);
        await cartPage.navigateToCartPage();
        await cartPage.proceedToCheckout();
        await expect(page).toHaveURL("https://www.automationpracticehub.com/cart/");

        const customerDetailsPage = new CustomerDetailsPage(page);
            await customerDetailsPage.selectCountryAndState('India', 'Delhi','New Delhi');
            await customerDetailsPage.fillCustomerDetails('Test User', '123 Main St', '9999999999');
            console.log ("Customer details filled successfully");
            await customerDetailsPage.proceedToReview();
            const reviewPage = new ReviewPage(page);
            await expect(reviewPage.reviewHandling).toBeVisible();
            await reviewPage.placeOrder();
            await expect(page).toHaveURL('https://www.automationpracticehub.com/success/');


})