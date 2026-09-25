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
   // console.log('Add to cart count:',await productPage.walletAddToCart.count());
   // console.log('Add to cart text:',await productPage.walletAddToCart.allTextContents());
    await productPage.addToCart();
  //  console.log('visiblepopup count:', await page.getByText('Item added successfully').count());
 //console.log("Message count:",await productPage.itemAddedMessage.count());
   //onsole.log(await productPage.walletAddToCart.evaluate(el => el.tagName));
  //console.log("Buttons inside wallet", await productPage.walletAddToCart.getByRole('button').allTextContents());
   
    await expect(productPage.itemAddedMessage).toBeVisible();
   //await page.pause();
  //console.log("Reached before pause");
    //await page.pause();

    const cartPage = new CartPage(page);
    await cartPage.navigateToCartPage();
    await cartPage.proceedToCheckout();

    const customerDetailsPage = new CustomerDetailsPage(page);
    await customerDetailsPage.selectCountryAndState('India', 'Delhi', 'New Delhi');
    await customerDetailsPage.fillCustomerDetails('Test User', '123 Main St', '9999999999');
    await customerDetailsPage.proceedToReview();

    const reviewPage = new ReviewPage(page);
    await expect(reviewPage.reviewHandling).toBeVisible();
    await reviewPage.placeOrder();
    await expect(page).toHaveURL('https://www.automationpracticehub.com/success/');
})