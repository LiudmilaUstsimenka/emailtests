import mailPage from '../pages/mailPage';
import { execFileSync } from 'child_process';

describe('check user can login', () => {
    beforeEach(() => {
        browser.get(mailPage.url, 3000);          
    });
    it('login emplty', () => {
        mailPage.loginInMailBox(' ', ' '); 

    });
    it('login invalid data', () => {
        mailPage.loginInMailBox('test', 'test');  

    });
    it('login valid data', () => {
        mailPage.loginInMailBox(mailPage.userNameValue, mailPage.userPasswordValue);  

    });
})