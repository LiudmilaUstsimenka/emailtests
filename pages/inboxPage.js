browser.ignoreSynchronization = true;

import BasePage from "./basePage";
import { element } from "protractor";

class InboxPage extends BasePage {
    constructor() {
        super();
        this.url = "https://e.mail.ru/messages/inbox/?back=1";   
        this.userEmailContainer = element(by.id('PH_user-email'));
        this.userEmailValue = 'liudmila.ustimenko.qa@mail.ru'
    };    

}
export default new InboxPage();