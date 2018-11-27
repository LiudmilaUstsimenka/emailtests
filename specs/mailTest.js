import mailPage from '../pages/mailPage';
import { Driver, getRandomString } from 'selenium-webdriver/safari';
import { async } from 'q';
import inboxPage from '../pages/inboxPage';

describe('check user can login', () => {
    beforeEach(() => {
        browser.get(mailPage.url, 3000);          
    });
    it('should display message when login with invalid name and pass', async () => {
        const randomstring = require("randomstring");
        let a = randomstring.generate(15);
        console.log(a);
        let b = randomstring.generate(12);
        console.log(b);
        mailPage.enterUserName(a);
        mailPage.enterUserPassword(b);
        mailPage.clickOnLoginButton();
        mailPage.errorContainerIsVisible();
        expect(await mailPage.errorMessageContainer.isDisplayed()).toBe(true);
        expect(await mailPage.errorMessageContainer.getText()).toContain(mailPage.invalidDataErrorMessage);
    });
    it('should display message when login empty name and empty pass', async() => {
        mailPage.enterUserName('');
        mailPage.enterUserPassword('');
        mailPage.clickOnLoginButton();
        mailPage.errorContainerIsVisible();
        expect(await mailPage.errorMessageContainer.isDisplayed()).toBe(true);
        expect(await mailPage.errorMessageContainer.getText()).toContain(mailPage.emptyFieldsErrorMessage);  
    });
    it('should display message when login with empty name', async() => {
        mailPage.enterUserName('');
        mailPage.enterUserPassword('text');
        mailPage.clickOnLoginButton();
        mailPage.errorContainerIsVisible();
        expect(await mailPage.errorMessageContainer.isDisplayed()).toBe(true);
        expect(await mailPage.errorMessageContainer.getText()).toContain(mailPage.emptyNameErrorMessage);         
    });
    it('should display message when login empty password', async() => {
        mailPage.enterUserName('text');
        mailPage.enterUserPassword('');
        mailPage.clickOnLoginButton();
        mailPage.errorContainerIsVisible();
        expect(await mailPage.errorMessageContainer.isDisplayed()).toBe(true);
        expect(await mailPage.errorMessageContainer.getText()).toContain(mailPage.emptyPassErrorMessage);         
    });
    it('should display messages when login with valid data', async() => {
        mailPage.enterUserName(mailPage.userNameValue);
        mailPage.enterUserPassword(mailPage.userPasswordValue);
        mailPage.clickOnLoginButton();
        inboxPage.logoutContainerIsVisible();
        expect(await inboxPage.logoutLinkContainer.isDisplayed()).toBe(true);
        expect(await inboxPage.logoutLinkContainer.getText()).toContain(inboxPage.logoutLinkName);
    });
})