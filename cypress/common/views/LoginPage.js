import { Navigation } from '../helpers/Navigation.js';

class LoginPage extends Navigation {
  
  _path                 = "/login";
  _loginFormId          = "#login-form";
  _loginSubmitId        = "#login-submit";
  _inputIdLoginUsername = "#login-email";
  _inputIdLoginPassword = "#login-password";
  _acceptCookiesButton  = "#didomi-notice-agree-button";
  _errorMessageTitleId  = "#error-message-title";

  Exist() {
    Navigation.WaitForElementToExist(this._loginFormId);
  }

  Visit() {
    Navigation.GoToUrl(this.path);
  }

  GoBackToPreviousView() {
    Navigation.GoBackToPreviousView();
  }

  AcceptCookies() {
    Navigation.ClickElementById(this._acceptCookiesButton);
  }
  
  AddEmail(email) {
    Navigation.AddText(this._inputIdLoginUsername, email);
  }

  AddPassword(text) {
    Navigation.AddText(this._inputIdLoginPassword, text);
  }

  ClickLoginButton() {
    Navigation.ClickElementById(this._loginSubmitId);
  }

  GetLoginErrorMessage() {
    return Navigation.GetTextFromElement(this._errorMessageTitleId);
  }
  
  
  WriteText() {
    Navigation.Click('email-label');
  }

  fillUsername(username) {
    cy.get('#username').type(username);
  }

  fillPassword(password) {
    cy.get('#password').type(password);
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }

  assertLoginSuccess() {
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome');
  }
}
  
export default new LoginPage();
  