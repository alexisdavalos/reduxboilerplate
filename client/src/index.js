import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {Provider} from 'react-redux';

const middleware = [thunk, logger]

const store = createStore(rootReducer, applyMiddleware(...middleware));
console.log('Store:', store)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root')
);


