import assert from 'assert';
import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import cartPage from '../pageobjects/cart.page.js';

describe('SauceDemo - Cart Page', () => {

    before(async () => {
        await loginPage.open();
        await loginPage.login(process.env.myuser, process.env.mypass);
        await inventoryPage.addBackpack();
        await inventoryPage.addBikeLight();
        await inventoryPage.openCart();
    });

    it('should be on cart page after opening it', async () => {
        const url = await browser.getUrl();
        assert.ok(url.includes('/cart.html'), 'Should be on cart page');
    });

    it('should remove item from cart', async () => {
        await cartPage.removeItem(cartPage.removeBackpackBtn);
        assert.strictEqual(await cartPage.getItemsCount(), 1, 'Only one item should remain');
    });

    it('should return item back to cart', async () => {
        await cartPage.continueShopping();
        await inventoryPage.addBackpack();
        await inventoryPage.openCart();
        assert.strictEqual(await cartPage.getItemsCount(), 2, 'Two items should be in the cart again');
    });

    it('should go to checkout page', async () => {
        await cartPage.checkout();
        const url = await browser.getUrl();
        assert.ok(url.includes('/checkout-step-one.html'), 'Should be on checkout page');
        await browser.back();
    });

    it('should return to shopping page', async () => {
        await cartPage.continueShopping();
        const url = await browser.getUrl();
        assert.ok(url.includes('/inventory.html'), 'Should return to inventory page');
    });

    it('should show empty cart after removing all items', async () => {
        await cartPage.open();
        await cartPage.removeAllItems();
        assert.strictEqual(await cartPage.getItemsCount(), 0, 'Cart should be empty');
        assert.strictEqual(await cartPage.isBadgeVisible(), false, 'Cart badge should disappear');
    });
});