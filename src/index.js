import React from 'react';
import { render } from 'react-dom';
import { rootReducer } from "./redux/rootReducer";
import { forbiddenWordsMiddleware } from "./redux/middleware";
import { compose, createStore, applyMiddleware } from "redux";
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga';
import { sagaWatcher } from "./redux/sagas";
import thunk from "redux-thunk";
import App from './App';

const saga = createSagaMiddleware();

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk, forbiddenWordsMiddleware, saga
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

saga.run(sagaWatcher)

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(app, document.getElementById('root'));
