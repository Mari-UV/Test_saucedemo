class CheckoutPage {
    get firstNameInput() { return $('[data-test="firstName"]'); }
    get lastNameInput() { return $('[data-test="lastName"]'); }
    get postalCodeInput() { return $('[data-test="postalCode"]'); }
    get continueButton() { return $('[data-test="continue"]'); }

    get finishButton() { return $('#finish'); }
    get backHomeButton() { return $('#back-to-products'); }

    get totalPrice() { return $('.summary_total_label'); }
    get totalPriceLabel() { return $('.summary_total_label'); }
    

    async fillCheckoutForm(firstName, lastName, postalCode) {
        await this.firstNameInput.waitForDisplayed();
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.postalCodeInput.setValue(postalCode);
    }

    async clickContinue() {
        await this.continueButton.waitForDisplayed();
        await this.continueButton.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('checkout-step-two.html'),
            { timeout: 5000, timeoutMsg: 'Не перешли на Checkout Step Two page' }
        );
    }

    async finishCheckout() {
        await this.finishButton.waitForDisplayed();
        await this.finishButton.click();
    }

    async backHome() {
        await this.backHomeButton.waitForDisplayed();
        await this.backHomeButton.click();
    }

    async getTotalPriceText() {
    await this.totalPrice.waitForDisplayed({ timeout: 5000 });
    return await this.totalPrice.getText();
    }

    async isFinishButtonDisplayed() {
        return await this.finishButton.isDisplayed();
    }

    async finishCheckout() {
        await this.finishButton.click();
    }

    async backHome() {
        await this.backHomeButton.click();
    }

}

export default new CheckoutPage();