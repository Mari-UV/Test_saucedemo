import BasePage from './base.page.js';

class CartPage extends BasePage {
    get cartLink() { return $('.shopping_cart_link'); }
    get items() { return $$('.cart_item'); }
    get badge() { return $('.shopping_cart_badge'); }
    get continueShoppingBtn() { return $('#continue-shopping'); }
    get checkoutBtn() { return $('[data-test="checkout"]'); }

    get removeBackpackBtn() { return $('#remove-sauce-labs-backpack'); }
    get removeBikeLightBtn() { return $('#remove-sauce-labs-bike-light'); }
    
    get items() { return $$('.cart_item'); }
    get badge() { return $('.shopping_cart_badge'); }
    get cartIcon() { return $('.shopping_cart_link'); }

    async open() {
        await this.cartIcon.waitForDisplayed({ timeout: 5000 });
        await this.cartIcon.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('/cart.html'),
            { timeout: 5000, timeoutMsg: 'Did not navigate to cart page' }
        );
    }

    async removeItem(button) {
        await button.waitForDisplayed({ timeout: 5000 });
        await button.click();
        await browser.pause(500);
    }

    async removeAllItems() {
        const buttons = await $$('button[data-test^="remove"]');
        if (!buttons || buttons.length === 0) return;

        for (const btn of buttons) {
            await btn.waitForDisplayed({ timeout: 5000 });
            await btn.click();
            await browser.pause(200);
        }

        if (await this.badge.isExisting()) {
            await this.badge.waitForDisplayed({ reverse: true, timeout: 5000 });
        }
    }

    async getItemsCount() {
        return (await this.items).length;
    }

    async isBadgeVisible() {
        return await this.badge.isExisting();
    }

    async continueShopping() {
        await this.continueShoppingBtn.waitForDisplayed({ timeout: 5000 });
        await this.continueShoppingBtn.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('/inventory.html'),
            { timeout: 5000, timeoutMsg: 'Did not return to inventory page after continue shopping' }
        );
    }

    async checkout() {
        await this.checkoutBtn.waitForDisplayed({ timeout: 5000 });
        await this.checkoutBtn.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('/checkout-step-one.html'),
            { timeout: 5000, timeoutMsg: 'Did not navigate to checkout page' }
        );
    }

    async proceedToCheckout() {
        await this.checkoutBtn.waitForDisplayed({ timeout: 5000 });
        await this.checkoutBtn.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('/checkout-step-one.html'),
            { timeout: 5000, timeoutMsg: 'Did not navigate to checkout page' }
        );
    }

}

export default new CartPage();