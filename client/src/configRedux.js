import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/'
import asyncReducer from './reducers/asyncReducer';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
console.log(reducer);
console.log(asyncReducer)
const middleware = [thunk, logger]

const configRedux = () => createStore(asyncReducer, applyMiddleware(...middleware));

export default configRedux;