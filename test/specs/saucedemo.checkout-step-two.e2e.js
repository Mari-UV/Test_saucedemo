import assert from 'assert';
import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import cartPage from '../pageobjects/cart.page.js';
import checkoutPage from '../pageobjects/checkout.page.js';

describe('SauceDemo - Checkout Step Two Page', () => {

    before(async () => {
        await loginPage.open();
        await loginPage.login(process.env.myuser, process.env.mypass);
        await inventoryPage.addBackpack();
        await inventoryPage.addBikeLight();

        await cartPage.open();
        await cartPage.proceedToCheckout();
        
        await checkoutPage.fillCheckoutForm('FirstName', 'LastName', '49808');
        await checkoutPage.clickContinue();
    });

    it('should display total price and Finish button', async () => {
        const totalText = await checkoutPage.getTotalPriceText();
        assert.ok(totalText.includes('Total'), 'Total price is not displayed');

        const isFinishDisplayed = await checkoutPage.isFinishButtonDisplayed();
        assert.strictEqual(isFinishDisplayed, true, 'Finish button should be visible');

        await checkoutPage.finishCheckout();

        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('checkout-complete.html'),
            { timeout: 5000, timeoutMsg: 'Не перешли на checkout-complete page' }
        );
    });

});