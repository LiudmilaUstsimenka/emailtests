browser.ignoreSynchronization = true;

import BasePage from "./basePage";
import { element } from "protractor";

class MailPage extends BasePage {
    constructor() {
        super();
        this.url = "https://mail.ru/";
        this.userNameInput = element(by.id("mailbox:login"));
        this.userDomainDropdown = element(by.id("mailbox:domain"));
        this.userPasswordInput = element(by.id("mailbox:password"));
        this.loginButton = element(by.id("mailbox:submit"));
        this.userNameValue = "liudmila.ustimenko.qa@mail.ru";
        this.userDomainValue = "@mail.ru";
        this.userPasswordValue = "luda1985masha1987";
        this.errorMessage = element(by.id("mailbox:error"));
    }

    loginInMailBox(name, password) {
        this.userNameInput.sendKeys(name);
        this.userPasswordInput.sendKeys(password);
        return this.loginButton.click();               
    }

}
export default new MailPage();