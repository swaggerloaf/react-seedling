import '@babel/polyfill';
import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as styles from './styles';
import App from './components/App.jsx';
import store from './redux/configureStore.js';

render(
  <Provider store={store}>
    <Router>
      <Route component={App} />
    </Router>
  </Provider>,
  document.getElementById('mountNode')
);
