import mailPage from '../pages/mailPage';
import userData from '../data/userData';
import inboxPage from '../pages/inboxPage';

class LoginValidDataStep {

    async loginValidData() {
        await browser.get(mailPage.url, 3000);
        await mailPage.enterUserName(userData.testUser.email);
        await mailPage.enterUserPassword(userData.testUser.password);
        await mailPage.loginButtonIsVisible();
        await mailPage.clickOnLoginButton();
        await inboxPage.createLetterButtonIsVisible();
    }
   
}
export default new LoginValidDataStep();