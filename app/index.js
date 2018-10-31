import * as React from 'react';
import ReactDom from 'react-dom';

import * as styles from './styles';

import App from './components/app.jsx';

ReactDom.render(
  <App />, document.getElementById('mountNode')
);

