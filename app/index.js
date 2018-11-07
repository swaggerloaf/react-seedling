import '@babel/polyfill';
import * as React from 'react';
import ReactDom from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import * as styles from './styles';
import { helloSaga } from './sagas/helloSaga';

import CounterContainer from './components/CounterContainer.jsx';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(helloSaga);

ReactDom.render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>,
  document.getElementById('mountNode')
);
