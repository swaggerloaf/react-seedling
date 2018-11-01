import * as React from 'react';
import ReactDom from 'react-dom';

import * as styles from './styles';

import App from './components/App.jsx';

ReactDom.render(<App />, document.getElementById('mountNode'));
