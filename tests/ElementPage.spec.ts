
//Practice validating static, dynamic, hidden, and delayed text elements
import {test , expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ElementPage } from '../pages/ElementPage';

test('Validating UI Elements 1', async ({ page }) => {
       const loginPage = new LoginPage(page);
        await loginPage.navigateToLoginPage();
        await loginPage.login('sagesyntaxacademy','BuildingExcellence@111');
        await expect(page).toHaveURL('https://www.automationpracticehub.com/home');
        await expect(loginPage.successToast).toBeVisible();

    const elementPage = new ElementPage(page);
    await elementPage.navigateToElementPage();
    await expect(page).toHaveURL('https://www.automationpracticehub.com/elements/');
    await expect(elementPage.automationTestingPractice).toBeVisible();
    await expect(elementPage.textValidationSection).toBeVisible();
    await expect (elementPage.verifyDifferentHeadingLevels).toBeVisible();
    await expect (elementPage.subsectionStaticText).toBeVisible();
    await expect (elementPage.uiVerificationTests).toBeVisible();
    await expect (elementPage.endOfHeadingExamples).toBeVisible();
    //static paragraphs
    await expect (elementPage.staticParagraphs).toBeVisible();
    await expect (elementPage.secondStaticParagraph).toBeVisible();
    console.log(elementPage.staticParagraphs);
    //Dynamic Text

    await elementPage.clickUpdateStatus();
    // await page.pause();
    await expect(page.getByText('Updated Successfully')).toBeVisible();

    //Hidden Text
    await elementPage.clickShowhdnTxt();
  //await page.pause();
    await expect(page.getByText('This text is hidden initially')).toBeVisible();

    //Button Interaction Practice
    await elementPage.clickButton();
    await expect(page.getByText('You Clicked Me!')).toBeVisible();
    
    await elementPage.doubleClick();
    await expect(page.getByText('You Double Clicked Me!')).toBeVisible();
});
