import MainPage from '../common/views/MainPage';
import LoginPage from '../common/views/LoginPage';
import Assert from '../common/helpers/Assert';

describe('@LoginPage - Login Validation Messages', () => {
  beforeEach(() => {
    MainPage.Visit();
    MainPage.AcceptCookies();
    MainPage.ClickLogin();
    LoginPage.Exist();
  });

  it('should not display an error when no credentials are entered', () => {
    LoginPage.ClickLoginButton();

    // Assert: error message should not be visible
    Assert.ShouldNotExist(LoginPage.GetLoginErrorMessage());
  });

  it('should display an error when invalid credentials are provided', () => {
    const email = 'EmailTest@Google.com';
    const password = 'pass';
    const expectedError = 'Inloggningen misslyckades. Kontrollera e-postadress och lösenord.';

    LoginPage.AddEmail(email);
    LoginPage.AddPassword(password);
    LoginPage.ClickLoginButton();

    // Assert: error message should match expected
    Assert.ShouldHaveText(LoginPage.GetLoginErrorMessage(), expectedError);
  });
});