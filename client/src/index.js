import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// provider will keep track of the store
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers'

import Uploads from "./Uploads"

// setup the redux // 
const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <Uploads />,
    </Provider>,
    document.getElementById('root'));