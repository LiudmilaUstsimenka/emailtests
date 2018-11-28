import mailPage from '../pages/mailPage';
import inboxPage from '../pages/inboxPage';
import loginValidDataStep from '../steps/loginValidDataStep';

describe('check user can login', () => {   
    it('should display messages when login with valid data', async() => {
        loginValidDataStep.loginValidData();
        expect(await inboxPage.createLetterButton.isDisplayed()).toBe(true);
        expect(await inboxPage.logoutLinkContainer.getText()).toContain(inboxPage.logoutLinkName);
    });
})