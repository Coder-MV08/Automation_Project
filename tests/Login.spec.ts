import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.ts';

test('positive login test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.login('sagesyntaxacademy','BuildingExcellence@111');
    await expect(page).toHaveURL('https://www.automationpracticehub.com/home');
    await expect(loginPage.successToast).toBeVisible();

});

test ('negative login test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage()
    await loginPage.login('sagesyntaxacademy','InvalidPassword');
    await expect(loginPage.toastMessage).toBeVisible();
});

test ('negative login test with empty credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage()
    await loginPage.login('','');
    await expect(loginPage.toastMessage2).toBeVisible();
});
test ('negative login test with empty username', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage()
    await loginPage.login('','BuildingExcellence@111');
    await expect(loginPage.toastMessage2).toBeVisible();
});
test ('negative login test with empty password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage()
    await loginPage.login('sagesyntaxacademy','');
    await expect(loginPage.toastMessage2).toBeVisible();
});
test ('negative login test with invalid username', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage()
    await loginPage.login('InvalidUsername','BuildingExcellence@111');
    await expect(loginPage.toastMessage).toBeVisible();
});
