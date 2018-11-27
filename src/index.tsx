import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/app.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history';
import Store from './store/index';

const history = createBrowserHistory();
const initialState = { user: { isLogin: false } };
const store = Store(history, initialState);

ReactDOM.render(<App store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
