import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.ts';

test('Authentication user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.login('sagesyntaxacademy','BuildingExcellence@111');
    await expect(page).toHaveURL('https://www.automationpracticehub.com/home');
    await expect(loginPage.successToast).toBeVisible();
    await page.context().storageState({ path: 'auth/finance.json' });

});