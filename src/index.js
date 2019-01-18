import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import GlobalStyle from './globalStyle';
import CheckOut from './pages/CheckOut';

import store from './createStore';
import theme from './theme';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <CheckOut />
      </React.Fragment>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
