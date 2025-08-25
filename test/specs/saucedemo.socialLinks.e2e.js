import assert from 'assert';
import loginPage from '../pageobjects/login.page.js';
import footerPage from '../pageobjects/footer.page.js';

describe('SauceDemo - Social Media Links', () => {

    before(async () => {
        await loginPage.open();
        await loginPage.login(process.env.myuser, process.env.mypass);

        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('inventory.html'),
            { timeout: 2000, timeoutMsg: 'Не перешли на inventory page!' }
        );
    });

    it('should verify social media links and target', async () => {
        const twitterHref = await footerPage.getLinkHref(footerPage.twitterLink);
        assert.strictEqual(twitterHref, 'https://twitter.com/saucelabs');

        const facebookHref = await footerPage.getLinkHref(footerPage.facebookLink);
        assert.strictEqual(facebookHref, 'https://www.facebook.com/saucelabs');

        const linkedinHref = await footerPage.getLinkHref(footerPage.linkedinLink);
        assert.strictEqual(linkedinHref, 'https://www.linkedin.com/company/sauce-labs/');

        const target = await footerPage.getLinkTarget(footerPage.twitterLink);
        assert.strictEqual(target, '_blank');
    });

});