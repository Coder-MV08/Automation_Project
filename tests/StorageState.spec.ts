import { test, expect } from '@playwright/test';

test('save signed-in storage state', async ({ page }) => {
  test.setTimeout(60_000);

  await page.goto('https://the-internet.herokuapp.com/login', {
    waitUntil: 'commit',
  });

  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');

  await page.context().storageState({ path: './storageState.json' });
});

