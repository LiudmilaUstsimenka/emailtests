import mailPage from '../pages/mailPage';
import inboxPage from '../pages/inboxPage';
import { async } from 'q';

describe('check user can send email', () => {
    it('should login', async() => {
        browser.get(mailPage.url, 3000);
        mailPage.enterUserName(mailPage.userNameValue);
        mailPage.enterUserPassword(mailPage.userPasswordValue);
        mailPage.clickOnLoginButton();
        inboxPage.logoutContainerIsVisible();
        expect(await inboxPage.logoutLinkContainer.isDisplayed()).toBe(true);
        expect(await inboxPage.logoutLinkContainer.getText()).toContain(inboxPage.logoutLinkName);
    });
    it('should open new email page', async() => {
        inboxPage.createLetterButtonIsVisible();
        inboxPage.createLetterButtonIsClickable();
        inboxPage.clickOnCreateLetterButton();
        inboxPage.userPhotoIsVisible();
        expect(await inboxPage.userPhoto.isDisplayed()).toBe(true);        
    });
    it('should fill fields', async() => {
        inboxPage.userPhoto.click();
        inboxPage.userPhotoIsVisible();
        inboxPage.userPhotoIsClickable();
        // inboxPage.emailToSendContainerisVisible();
        inboxPage.enterEmail(mailPage.userNameValue);
        // inboxPage.subjectLetterContainerisVisible();
        inboxPage.enterSubject('test');
        // inboxPage.textContainetIsVisible();
        inboxPage.enterText('text');
        // inboxPage.sendLetterButtonIsVisible();
        inboxPage.sendLetterButtonIsClickable();
        inboxPage.clickOnSendLetterButton();
        // inboxPage.subjectLetterContainerisVisible();
        expect(await inboxPage.subjectLetterContainer.isDisplayed()).toBe(true);
        expect(await inboxPage.subjectLetterContainer.getText()).toContain('отправлено');
    });
})