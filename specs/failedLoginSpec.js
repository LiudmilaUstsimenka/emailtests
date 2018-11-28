import mailPage from '../pages/mailPage';
import { Driver, getRandomString } from 'selenium-webdriver/safari';
import { async } from 'q';
import inboxPage from '../pages/inboxPage';
import userData from '../data/messagesData';

describe('check user can login', () => {
    beforeEach(() => {
        browser.get(mailPage.url, 3000);          
    });
    it('should display message when login with invalid name and pass', async () => {
        const randomstring = require("randomstring");
        let email = randomstring.generate(15);
        let password = randomstring.generate(12);
        mailPage.enterUserName(email);
        mailPage.enterUserPassword(password);
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
        expect(await mailPage.errorMessageContainer.getText()).toContain(userData.errorMessageEmptyLoginForm);  
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
})