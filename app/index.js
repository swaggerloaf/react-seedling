import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from './app';
// here we bootstrap our applica
ReactDOM.render(React.createElement(HelloMessage, { name: 'World' }), document.getElementById('root'));
