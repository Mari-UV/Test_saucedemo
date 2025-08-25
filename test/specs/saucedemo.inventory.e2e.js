import assert from 'assert';
import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';

describe('SauceDemo - Inventory Page', () => {

    before(async () => {
        await loginPage.open();
        await loginPage.login(process.env.myuser, process.env.mypass);

        const currentUrl = await browser.getUrl();
        assert.ok(currentUrl.includes('inventory.html'), 'Not redirected to inventory page!');
    });

    it('should add Sauce Labs Backpack to the cart and see badge = 1', async () => {
        await inventoryPage.addItemToCart('button[data-test="add-to-cart-sauce-labs-backpack"]');
        const badgeCount = await inventoryPage.getCartBadgeCount();
        assert.strictEqual(badgeCount, 1, 'Badge should show 1 after adding Backpack');
    });

    it('should add Sauce Labs Bike Light to the cart and see badge = 2', async () => {
        await inventoryPage.addItemToCart('button[data-test="add-to-cart-sauce-labs-bike-light"]');
        const badgeCount = await inventoryPage.getCartBadgeCount();
        assert.strictEqual(badgeCount, 2, 'Badge should show 2 after adding Bike Light');
    });

    it('should open burger menu and logout', async () => {
        await inventoryPage.openBurgerMenu();
        await inventoryPage.logout();

        const currentUrl = await browser.getUrl();
        assert.ok(currentUrl.includes('saucedemo.com'), 'Not redirected to login page after logout!');
    });

});