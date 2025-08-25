import assert from 'assert';
import loginPage from '../pageobjects/login.page.js';

describe('SauceDemo - Login Page', () => {

    before(async () => {
        await browser.reloadSession();
        await loginPage.open();
    });

    it('should type username and password', async () => {
        await loginPage.enterUsername(process.env.myuser);
        await loginPage.enterPassword(process.env.mypass);

        const usernameValue = await loginPage.usernameInput.getValue();
        const passwordValue = await loginPage.passwordInput.getValue();

        assert.strictEqual(usernameValue, process.env.myuser);
        assert.strictEqual(passwordValue, process.env.mypass);
    });

    it('should login and navigate to inventory page', async () => {
        await loginPage.clickLogin();
        const url = await browser.getUrl();
        assert.ok(url.includes('/inventory.html'), 'Login should navigate to inventory page');
    });
});
