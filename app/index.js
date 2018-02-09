import React from 'react';
import ReactDOM from 'react-dom';
//import './styles.css';
import App from './components/app.jsx';
/*eslint-disable import/default */
//import 'babel-polyfill';
//import configureStore from './store/configureStore';;
import {Provider} from 'react-redux'
//import {loadCourses} from './actions/courseActions';
//import {loadAuthors} from './actions/authorActions';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

//const store = configureStore();
//store.dispatch(loadCourses());
//store.dispatch(loadAuthors());
ReactDOM.render(React.createElement(App),
 document.getElementById('root')
 );
