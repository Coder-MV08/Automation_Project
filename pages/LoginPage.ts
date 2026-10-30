
import { Page, Locator } from "playwright-core";

export class LoginPage {

    page: Page;
    usernameField: Locator;
    passwordField: Locator;
    dropdown: Locator;
    adminRadioButton: Locator;
    userRadioButton: Locator;
    tncCheckbox: Locator;
    signBtn: Locator;
    toastMessage: Locator;
    successToast: Locator;
    toastMessage2: Locator;

    constructor(page: Page) {

        this.page = page;

        this.usernameField = page.getByRole('textbox', {
            name: 'Username'
        });

        this.passwordField = page.getByLabel('Password');

        this.dropdown = page.getByRole('combobox');

        this.adminRadioButton = page.getByRole('radio', {
            name: 'Admin'
        });

        this.userRadioButton = page.getByRole('radio', {
            name: 'User'
        });

        this.tncCheckbox = page.getByRole('checkbox', {
            name: 'I agree to the Terms and Conditions'
        });

        this.signBtn = page.getByRole('button', {
            name: 'Sign In'
        });

        this.successToast = page.getByRole('alert');

        this.toastMessage = page.getByText('Invalid credentials');

        this.toastMessage2 = page.getByText(
            'Either username or password field is empty'
        );
    }

    async navigateToLoginPage() {

        await this.page.goto('https://www.automationpracticehub.com/');

        await this.page.waitForLoadState('domcontentloaded');

        console.log('Login page URL:', this.page.url());
        console.log('Login page title:', await this.page.title());

        await this.usernameField.waitFor({
            state: 'visible',
            timeout: 10000
        });
    }

    async login(username: string, password: string) {

        console.log('Username locator count:', await this.usernameField.count());

        await this.usernameField.fill(username);

        await this.passwordField.fill(password);

        await this.dropdown.selectOption({
            label: 'Student'
        });

        await this.adminRadioButton.check();

        await this.tncCheckbox.check();

        await this.signBtn.click();
    }
}
