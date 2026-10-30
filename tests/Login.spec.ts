
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.ts';

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
});

test('positive login test', async ({ page }) => {
    await loginPage.login(
        'sagesyntaxacademy',
        'BuildingExcellence@111'
    );

    await expect(page).toHaveURL(
        'https://www.automationpracticehub.com/home'
    );
    await expect(loginPage.successToast).toBeVisible();
});

test('negative login test', async () => {
    await loginPage.login(
        'sagesyntaxacademy',
        'InvalidPassword'
    );

    await expect(loginPage.toastMessage).toBeVisible();
});

test('negative login test with empty credentials', async () => {
    await loginPage.login('', '');
    await expect(loginPage.toastMessage2).toBeVisible();
});

test('negative login test with empty username', async () => {
    await loginPage.login('', 'BuildingExcellence@111');
    await expect(loginPage.toastMessage2).toBeVisible();
});

test('negative login test with empty password', async () => {
    await loginPage.login('sagesyntaxacademy', '');
    await expect(loginPage.toastMessage2).toBeVisible();
});

test('negative login test with invalid username', async () => {
    await loginPage.login(
        'InvalidUsername',
        'BuildingExcellence@111'
    );

    await expect(loginPage.toastMessage).toBeVisible();
});
