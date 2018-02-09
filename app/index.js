import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/app.jsx';

import {Provider} from 'react-redux'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';


// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
