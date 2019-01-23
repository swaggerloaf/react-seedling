import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/index.js';
import createSagaMiddleware from 'redux-saga';
import { helloSaga } from './sagas/sagas';
import { createLogger } from 'redux-logger';
const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(helloSaga);

//const store = createStore(rootReducer);
export default store;
