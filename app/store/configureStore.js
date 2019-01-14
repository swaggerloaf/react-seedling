import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index.js';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

//const store = createStore(rootReducer);
export default store;
