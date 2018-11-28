browser.ignoreSynchronization = true;

import BasePage from "./basePage";
import { element } from "protractor";
import { AssertionError } from "assert";

class MailPage extends BasePage {
    constructor() {
        super();
        this.url = "https://mail.ru/";
        this.userNameInput = element(by.id("mailbox:login"));
        this.userDomainDropdown = element(by.id("mailbox:domain"));
        this.userPasswordInput = element(by.id("mailbox:password"));
        this.errorMessageContainer = element(by.id('mailbox:error'));            
    }

    async enterUserName(name) {
        await browser.wait(this.isVisible(this.userNameInput), this.timeout.xxl, "User name field is not visible");
        return this.userNameInput.sendKeys(name);
    }

    async enterUserPassword(password) {
        await browser.wait(this.isVisible(this.userPasswordInput), this.timeout.xxl, "User password field is not visible");
        return this.userPasswordInput.sendKeys(password);
    }

    async clickUserDomain() {
        await browser.wait(this.isVisible(this.userDomainDropdown), this.timeout.xxl, "User domain dropdown is not visible");
        return this.userDomainDropdown.click();
    }

    async loginButtonIsVisible() {
        await browser.wait(this.isVisible(this.loginButton), this.timeout.xxl, "Login button is not visible");
        return this.loginButton.isVisible();
    }

    async clickOnLoginButton() {
        await browser.wait(this.isClickable(this.loginButton), this.timeout.xxl, "Login button is not clickable");
        return this.loginButton.click();
    }

    async errorContainerIsVisible() {
        await browser.wait(this.isVisible(this.errorMessageContainer), this.timeout.xxl, "Error container is not visible");
        return this.errorMessageContainer.isVisible();
    }

}
export default new MailPage();