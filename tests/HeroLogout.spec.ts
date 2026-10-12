import { test, expect } from '@playwright/test';

test.use({ storageState: './storageState.json' });

test('verify logout functionality', async ({ page }) => {
  test.setTimeout(60_000);

  await page.goto('https://the-internet.herokuapp.com/secure', {
    waitUntil: 'commit',
  });

  await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');
  await page.getByRole('link', { name: 'Logout' }).click();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');
});