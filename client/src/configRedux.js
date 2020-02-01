import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'
import asyncReducer from './reducers/asyncReducer';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
console.log('Root Reducer:',rootReducer);
console.log(asyncReducer)
const middleware = [thunk, logger]

const configRedux = () => createStore(asyncReducer, applyMiddleware(...middleware));

export default configRedux;