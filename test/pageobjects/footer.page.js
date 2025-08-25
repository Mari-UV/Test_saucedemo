class FooterPage {
    get twitterLink() {
        return $('a[href="https://twitter.com/saucelabs"]');
    }

    get facebookLink() {
        return $('a[href="https://www.facebook.com/saucelabs"]');
    }

    get linkedinLink() {
        return $('a[href="https://www.linkedin.com/company/sauce-labs/"]');
    }

    async getLinkHref(element) {
        await element.waitForDisplayed();
        return element.getAttribute('href');
    }

    async getLinkTarget(element) {
        return element.getAttribute('target');
    }
}

export default new FooterPage();