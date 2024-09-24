import { expect } from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'


describe('Login Tests', () => {
    before(async () => {
        await browser.url('https://www.saucedemo.com/');
    });

    it('UC-1: Test Login form with empty credentials', async () => {
        await loginPage.clearInputs();
        await loginPage.login('', '');
        const errorMessage = await loginPage.errorMessage.getText();
        expect(errorMessage).toBe('Epic sadface: Username is required');
    });

    it('UC-2: Test Login form with credentials by passing Username', async () => {
        await loginPage.clearInputs();
        await loginPage.userNameInput.setValue('standard_user');
        await loginPage.clearInputs();
        await loginPage.login('standard_user', '');
        const errorMessage = await loginPage.errorMessage.getText();
        expect(errorMessage).toBe('Epic sadface: Password is required');
    });

    it('UC-3: Test Login form with credentials by passing Username & Password', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
        const title = await browser.getTitle();
        expect(title).toBe('Swag Labs');
    });
});
