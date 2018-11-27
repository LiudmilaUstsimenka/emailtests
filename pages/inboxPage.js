browser.ignoreSynchronization = true;

import BasePage from "./basePage";
import { element } from "protractor";

class InboxPage extends BasePage {
    constructor() {
        super();
        this.url = "https://e.mail.ru/messages/inbox/?back=1";   
        this.userEmailContainer = element(by.css('#PH_user-email'));
        this.logoutLinkContainer = $('#PH_logoutLink');
        this.userEmailValue = 'liudmila.ustimenko.qa@mail.ru'
        this.logoutLinkName = 'выход';
        this.errorMessageContainer = $('//*[@class="login-header"]/p');
        this.captchaContainer = $('//*[@class="captcha"]');
        this.captchaErrorMessage = 'Замечены подозрительные попытки входа в ваш почтовый ящик.';
    };  
    
    checkErrorMessageIsDisplayed() {
        this.errorMessageContainer.isDisplayed();
        return true;
    }

    async logoutContainerIsVisible() {
        await browser.wait(this.isVisible(this.logoutLinkContainer), this.timeout.xxl, "Error container is not visible");
        return this.logoutLinkContainer.getText();
    }

}
export default new InboxPage();