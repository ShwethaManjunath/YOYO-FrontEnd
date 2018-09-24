import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import reducers from './app/reducers';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';

const store = createStore(
    reducers,
    applyMiddleware(logger, ReduxPromise, ReduxThunk)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
