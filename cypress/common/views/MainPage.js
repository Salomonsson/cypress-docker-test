import { Navigation } from '../helpers/Navigation.js';

class MainPage extends Navigation {

    _logoId                 = "#logo-title";
    _acceptCookiesButtonId  = "#didomi-notice-agree-button";
    _login                  = "Logga in";
    _sport                  = "Sport";
    
    Visit() {
      Navigation.GoToUrl('/');
    }

    AcceptCookies() {
      Navigation.ClickElementById(this._acceptCookiesButtonId);
    }

    ClickLogin() {
      Navigation.ClickLinkByText(this._login);
    }
    
    GoToStartByLogo(){
      Navigation.ClickElementById(this._logoId, "@MainPage @GoToStartByLogo - This is a custom error message.");
    }

    GoToSport(){
      Navigation.ClickLinkByText(this._sport);
    }
}
  
export default new MainPage();