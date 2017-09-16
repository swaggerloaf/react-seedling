import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import Clock from './components/clock.jsx';

ReactDOM.render(React.createElement(Clock, { name: "quick" }),
 document.getElementById('bottom')
 );


ReactDOM.render(React.createElement(App, { name: "quick" }),
 document.getElementById('root')
 );
