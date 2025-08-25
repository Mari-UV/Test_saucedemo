import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import cartPage from '../pageobjects/cart.page.js';
import checkoutPage from '../pageobjects/checkout.page.js';

describe('SauceDemo - Checkout Step One Page', () => {

    before(async () => {
        await loginPage.open();
        await loginPage.login(process.env.myuser, process.env.mypass);

        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('inventory.html'),
            { timeout: 2000, timeoutMsg: 'Не перешли на inventory page' }
        );

        await inventoryPage.addFirstTwoItems();
        await cartPage.open();
        await cartPage.proceedToCheckout();
    });

    it('should fill checkout form and click Continue', async () => {
        await checkoutPage.fillCheckoutForm('FirstName', 'LastName', '49808');
        await checkoutPage.clickContinue();

        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('checkout-step-two.html'),
            { timeout: 2000, timeoutMsg: 'Не перешли на checkout-step-two page' }
        );
    });

});