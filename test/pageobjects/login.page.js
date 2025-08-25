import BasePage from './base.page.js';

class LoginPage extends BasePage {
    get usernameInput() { return $('#user-name'); }
    get passwordInput() { return $('#password'); }
    get loginButton() { return $('#login-button'); }

  
    async typeLikeHuman(element, text, delay = 150) {
        for (const char of text) {
            await element.addValue(char);
            await browser.pause(delay);
        }
    }

    async enterUsername(username) {
        await this.usernameInput.waitForDisplayed();
        await this.typeLikeHuman(this.usernameInput, username);
    }

    async enterPassword(password) {
        await this.passwordInput.waitForDisplayed();
        await this.typeLikeHuman(this.passwordInput, password);
    }

    async clickLogin() {
        await this.loginButton.click();
        await browser.pause(1000);
    }

    async open() {
        await super.open('');
    }

    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }

}

export default new LoginPage();