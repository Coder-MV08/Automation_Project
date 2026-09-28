import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.ts';
import { Logout } from '../pages/Logout.ts';
test('Logging out', async ({ page }) => {

 const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.login('sagesyntaxacademy','BuildingExcellence@111');
    await expect(page).toHaveURL('https://www.automationpracticehub.com/home');
    await expect(loginPage.successToast).toBeVisible();
    
//Logout 
const logout = new Logout (page);
await logout.Logout( );
 await expect (page).toHaveURL('https://www.automationpracticehub.com/login/');


});