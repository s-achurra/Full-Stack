import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './actions/session_actions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();

    window.signup = APIUtil.signup;
    window.logout = APIUtil.logout;
    window.login = APIUtil.login;
    window.store = store;

    ReactDOM.render(<h1>Frontend Entry File</h1>, root);
});
