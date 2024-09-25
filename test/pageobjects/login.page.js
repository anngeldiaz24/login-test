import { $ } from '@wdio/globals'

/**
 * Login class
 */
class LoginPage {
    get userNameInput(){
        return $('//input[@id="user-name"]');
    }

    get passwordInput(){
        return $('//input[@id="password"]');
    }

    get loginButton(){
        return $('//input[@id="login-button"]');
    }

    get errorMessage(){
        return $('//h3[@data-test="error"]');
    }

    async login(username, password) {
        await this.userNameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async clearInputs() {
        await this.userNameInput.clearValue();
        await this.passwordInput.clearValue();
    }
}

export default new LoginPage();