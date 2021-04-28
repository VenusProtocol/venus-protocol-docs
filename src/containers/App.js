import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import enMessages from 'lang/en';
import { store } from 'core';
import DocsContainer from 'containers/Docs';
import Theme from './Theme';

import 'assets/styles/App.scss';

addLocaleData([...en]);
const initialLang = 'en';

const messages = {
  en: enMessages
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: initialLang
    };
  }

  render() {
    const { lang } = this.state;
    const message = messages[lang];
    return (
      <Theme>
        <IntlProvider locale={lang} messages={message}>
          <Provider store={store}>
            <BrowserRouter>
              <AnimatedSwitch
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 0.5 }}
                atActive={{ opacity: 1 }}
                className="switch-wrapper"
              >
                <Route path="/docs" component={DocsContainer} />
                <Redirect from="/" to="/docs/getstarted" />
              </AnimatedSwitch>
            </BrowserRouter>
          </Provider>
        </IntlProvider>
      </Theme>
    );
  }
}

export default hot(App);
