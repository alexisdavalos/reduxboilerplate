import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import configRedux from './configRedux';
import {Provider} from 'react-redux';

const store = configRedux();
console.log('Store:', store)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root')
);


