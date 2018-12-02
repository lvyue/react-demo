import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/app.scss';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Store from './store/index';

const initialState = { user: { isLogin: false, token: '' } };
const store = Store(initialState);

ReactDOM.render(<App store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
