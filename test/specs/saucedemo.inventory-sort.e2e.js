import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';

describe('SauceDemo - Inventory Sorting', () => {

    before(async () => {
        await loginPage.open();
        await loginPage.login(process.env.myuser, process.env.mypass);
        await inventoryPage.open();
    });

    it('should sort items by Name (A to Z) and then (Z to A)', async () => {
        await inventoryPage.selectSort('Name (A to Z)');
        const namesAZ = await inventoryPage.getItemNames();
        const sortedAZ = [...namesAZ].sort();
        expect(namesAZ).toEqual(sortedAZ);

        await inventoryPage.selectSort('Name (Z to A)');
        const namesZA = await inventoryPage.getItemNames();
        const sortedZA = [...namesZA].sort().reverse();
        expect(namesZA).toEqual(sortedZA);
    });

    it('should sort items by Price (low to high) and then (high to low)', async () => {
        await inventoryPage.selectSort('Price (low to high)');
        const pricesLowHigh = await inventoryPage.getItemPrices();
        const sortedLowHigh = [...pricesLowHigh].sort((a, b) => a - b);
        expect(pricesLowHigh).toEqual(sortedLowHigh);

        await inventoryPage.selectSort('Price (high to low)');
        const pricesHighLow = await inventoryPage.getItemPrices();
        const sortedHighLow = [...pricesHighLow].sort((a, b) => b - a);
        expect(pricesHighLow).toEqual(sortedHighLow);
    });

});