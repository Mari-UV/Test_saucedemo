export default class BasePage {
    async open(path = '') {
        await browser.url(`https://www.saucedemo.com/${path}`);
    }

    async getCurrentUrl() {
        return await browser.getUrl();
    }
}