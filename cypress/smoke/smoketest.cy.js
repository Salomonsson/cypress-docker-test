import MainPage from '../common/views/MainPage';

describe('@SmokeTest - Login Page Validation', () => {
  it('Basic smoke test', () => {
    MainPage.Visit();
    MainPage.AcceptCookies();
  });
});