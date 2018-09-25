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
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const store = createStore(
    reducers,
    applyMiddleware(logger, ReduxPromise, ReduxThunk)
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/' component={App}/>
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
