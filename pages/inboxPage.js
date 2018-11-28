browser.ignoreSynchronization = true;

import BasePage from "./basePage";
import { element } from "protractor";

class InboxPage extends BasePage {
    constructor() {
        super();
        this.url = "https://e.mail.ru/messages/inbox/?back=1";   
        this.userEmailContainer = element(by.css('#PH_user-email'));
        this.logoutLinkContainer = $('#PH_logoutLink');
        this.leftBlockCobtainer = element(by.id('b-nav_folders'));
        this.userPhoto = element(by.xpath('//*[@class="compose-head__avatar"]/img'));
        this.createLetterButton = element(by.xpath('//*[@id="b-toolbar__left"]/div/div/div[2]/div/a'));
        // this.createLetterButton = element(by.cssContainingText('span', 'Написать письмо'));
        this.sendLetterButton = element(by.cssContainingText('span', 'Отправить'));
        this.cancelButton = element(by.cssContainingText('span', 'Отмена'));
        this.stylesLink = element(by.cssContainingText('span', 'Стили'));  
        this.logoutLinkName = 'выход';
        this.errorMessageContainer = $('//*[@class="login-header"]/p');
        this.captchaContainer = $('//*[@class="captcha"]');
        this.captchaErrorMessage = 'Замечены подозрительные попытки входа в ваш почтовый ящик.';
        this.addressBookBtton = element(by.xpath('//*[@class="compose-head__row-wrapper compose-head__row-wrapper_to js-row"]/div/div/div/label/span'));
        this.emailToSendContainer = element(by.xpath('//*[@class="compose-head__row-wrapper compose-head__row-wrapper_to js-row"]/div/div/div/div/div/div/textarea[2]'));
        this.subjectLetterContainer = element(by.xpath('//*[@name="Subject"]'));
        this.textContainer = element(by.xpath('//*[@id="tinymce"]'));
        this.successMessageContainer = element(by.xpath('//*[@class="message-sent__title"]'));
    };  

    async logoutContainerIsVisible() {
        await browser.wait(this.isVisible(this.logoutLinkContainer), this.timeout.xxl, "Error container is not visible");
        return this.logoutLinkContainer.isVisible();
    }

    async createLetterButtonIsVisible() {
        await browser.wait(this.isVisible(this.createLetterButton), this.timeout.xxl, 'Create letter button is not visible');
        return this.createLetterButton.isVisible();
    }

    async createLetterButtonIsClickable() {
        await browser.wait(this.isClickable(this.createLetterButton), this.timeout.xxl, 'Create letter button is not clickable');
        return this.createLetterButton.isClickable();
    }
    async userPhotoIsVisible() {
        await browser.wait(this.isVisible(this.userPhoto), this.timeout.xxl, '');
        return this.userPhoto.isVisible();
    }

    async leftBlockCobtainerIsVisible() {
        await browser.wait(this.isVisible(this.leftBlockCobtainer), this.timeout.xxl, 'leftBlockCobtainer is not visible');
        return this.leftBlockCobtainer.isVisible();
    }
    async userPhotoIsClickable() {
        await browser.wait(this.isClickable(this.userPhoto), this.timeout.xxl, '');
        return this.userPhoto.isClickable();
    }
    
    async clickOnCreateLetterButton() {
        await browser.wait(this.isClickable(this.createLetterButton), this.timeout.xxl, "Create letter button is not clickable");
        return this.createLetterButton.click();
    }

    async stylesLinkIsVisible() {
        await browser.wait(this.isVisible(this.stylesLink), this.timeout.xxl, 'Стили is not visible');
        return this.stylesLink.isVisible();
    }

    async stylesLinkIsClickable() {
        await browser.wait(this.isClickable(this.stylesLink), this.timeout.xxl, 'Стили is not clickable');
        return this.stylesLink.isClickable();
    }


    async sendLetterButtonIsVisible() {
        await browser.wait(this.isVisible(this.sendLetterButton), this.timeout.xxl, 'Send letter button is not visible');
        return this.sendLetterButton.isVisible();
    }

    async sendLetterButtonIsClickable() {
        await browser.wait(this.isClickable(this.sendLetterButton), this.timeout.xxl, 'Send letter button is not clickable');
        return this.sendLetterButton.isClickable();
    }
    
    async clickOnSendLetterButton() {
        await browser.wait(this.isClickable(this.sendLetterButton), this.timeout.xxl, "Create letter button is not clickable");
        return this.sendLetterButton.click();
    }

    async enterEmail(email) {
        await browser.wait(this.isVisible(this.emailToSendContainer), this.timeout.xxl, "Address can not be entered");
        return this.emailToSendContainer.sendKeys(email);
    }


    async enterSubject(subject) {
        await browser.wait(this.isVisible(this.subjectLetterContainer), this.timeout.xxl, "Subject can not be entered");
        return this.subjectLetterContainer.sendKeys(subject);
    }


    async enterText(text) {
        await browser.wait(this.isVisible(this.textContainer), this.timeout.xxl, "Text can not be entered");
        return this.textContainer.sendKeys(text);
    }

    async successMessageContainerIsVisible() {
        await browser.wait(this.isVisible(this.successMessageContainer), this.timeout.xxl, 'Success message container is not visible');
        return this.successMessageContainer.isVisible();
    }

}
export default new InboxPage();