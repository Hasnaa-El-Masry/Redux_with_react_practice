import {createStore, applyMiddleware }from 'redux';
import reducer from './rootReducer';
import { createLogger } from 'redux-logger';

const store = createStore(reducer,applyMiddleware(createLogger()));

export default store;