import assert from 'assert';
import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import cartPage from '../pageobjects/cart.page.js';
import checkoutPage from '../pageobjects/checkout.page.js';

describe('SauceDemo - Checkout Complete', () => {
    before(async () => {
        await loginPage.open();
        await loginPage.login(process.env.myuser, process.env.mypass);

        await inventoryPage.addBackpack(); 

        await cartPage.open();
        await cartPage.proceedToCheckout();

        await checkoutPage.fillCheckoutForm('FirstName', 'LastName', '49808');
        await checkoutPage.clickContinue();

        await checkoutPage.finishCheckout();

        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('checkout-complete.html'),
            { timeout: 5000, timeoutMsg: 'Не перешли на Checkout Complete page' }
        );
    });

    it('should return to products page after clicking Back Home', async () => {
        await checkoutPage.backHome();
        const currentUrl = await browser.getUrl();
        assert.ok(currentUrl.includes('inventory.html'), 'Did not return to inventory page after Back Home!');
    });
});
