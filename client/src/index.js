import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// provider will keep track of the store
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import DarkMode from './components/darkMode/darkMode';

import Uploads from "./Uploads"

// setup the redux // 
const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
<<<<<<< HEAD
        <Uploads />
        <DarkMode />
=======
        {/* <Uploads /> */}
>>>>>>> fd740b5e25249cf9e174509ddc5220091790d1ae
        <App />
        <DarkMode />
    </Provider>,
    document.getElementById('root'));