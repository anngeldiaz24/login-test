import { $ } from '@wdio/globals'

/**
 * Login class
 */
class LoginPage {
    get userNameInput(){
        return $('input#user-name');
    }

    get passwordInput(){
        return $('input#password');
    }

    get loginButton(){
        return $('input#login-button');
    }

    get errorMessage(){
        return $('h3[data-test="error"]');
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