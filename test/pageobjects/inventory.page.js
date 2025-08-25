import BasePage from './base.page.js';

class InventoryPage extends BasePage {
    get backpackAddBtn() {  return $('#add-to-cart-sauce-labs-backpack'); }
    get bikeLightAddBtn() {  return $('#add-to-cart-sauce-labs-bike-light'); }
    get cartIcon() { return $('.shopping_cart_link'); }
    get sortDropdown() { return $('.product_sort_container');}
    get itemNames() { return $$('.inventory_item_name');}
    get itemPrices() { return $$('.inventory_item_price');}
    get firstItem() { return $('[data-test="add-to-cart-sauce-labs-backpack"]'); }
    get secondItem() { return $('[data-test="add-to-cart-sauce-labs-bike-light"]'); }
    get cartIcon() { return $('.shopping_cart_link'); }
    get addBackpackButton() { return $('button[data-test="add-to-cart-sauce-labs-backpack"]'); }
    get addBikeLightButton() { return $('button[data-test="add-to-cart-sauce-labs-bike-light"]'); }
    get cartBadge() { return $('.shopping_cart_badge'); }
    get burgerMenuButton() { return $('#react-burger-menu-btn'); }
    get logoutLink() { return $('#logout_sidebar_link'); }
    get backpackBtn() { return $('[data-test="add-to-cart-sauce-labs-backpack"]'); }
    get bikeLightBtn() { return $('[data-test="add-to-cart-sauce-labs-bike-light"]'); }
   
    async addBackpack() {
        await this.backpackAddBtn.waitForDisplayed();
        await this.backpackAddBtn.click();
        await browser.pause(500);
    }

    async addBikeLight() {
        await this.bikeLightAddBtn.waitForDisplayed();
        await this.bikeLightAddBtn.click();
        await browser.pause(500);
    }

    async openCart() {
        await this.cartIcon.waitForDisplayed();
        await this.cartIcon.click();
        await browser.pause(1000);
    }

    async selectSort(optionText) {
        await this.sortDropdown.waitForDisplayed();
        await this.sortDropdown.selectByVisibleText(optionText);
        await browser.pause(500); 
    }

    async getItemNames() {
        const names = [];
        for (const el of await this.itemNames) {
            names.push(await el.getText());
        }
        return names;
    }

    async getItemPrices() {
        const prices = [];
        for (const el of await this.itemPrices) {
            const text = await el.getText();
            prices.push(parseFloat(text.replace('$', '')));
        }
        return prices;
    }

    open() {
        return super.open('inventory.html');
    }

    async addFirstTwoItems() {
        await this.firstItem.click();
        await this.secondItem.click();
    }

    async addItemToCart(itemName) {
        // itemName: 'sauce-labs-backpack'
        const itemSelector = `[data-test="add-to-cart-${itemName}"]`;
        const itemButton = await $(itemSelector);
        await itemButton.waitForDisplayed();
        await itemButton.click();
    }

    async openCart() {
        await this.cartIcon.waitForDisplayed();
        await this.cartIcon.click();
    }

    async addItemToCart(selector) {
        const button = await $(selector);
        await button.waitForDisplayed();
        await button.click();
        }

    async getCartBadgeCount() {
        const badge = await this.cartBadge;
        if (!(await badge.isDisplayed())) return 0;
        const text = await badge.getText();
        return parseInt(text);
    }

    async openBurgerMenu() {
        await this.burgerMenuButton.waitForDisplayed();
        await this.burgerMenuButton.click();
    }

    async logout() {
        await this.logoutLink.waitForDisplayed();
        await this.logoutLink.click();
    }

}

export default new InventoryPage();