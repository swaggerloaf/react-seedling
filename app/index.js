import '@babel/polyfill';
import * as React from 'react';
import { render } from 'react-dom';
//import { Provider } from 'react-redux';
import * as styles from './styles';
//import App from './components/App.jsx';
//import store from './configStore.js';

class HelloMessage extends React.Component {
  render() {
    return <div className="slds-text-color_success">Hi {this.props.name}</div>;
  }
}

render(
  <HelloMessage name="Fred"></HelloMessage>,
  document.getElementById('mountNode')
);
