import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as GroupActions from './actions/group_actions';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;

    if (window.currentUser) {
      const preloadedState = { session: {
        currentUser: window.currentUser,
        errors: [] }};
      store = configureStore(preloadedState);
      delete window.currentUser;
    } else {
      store = configureStore();
    }

    window.store = store;
    window.fetchAllGroups = GroupActions.fetchAllGroups;

    ReactDOM.render(<Root store={ store }/>, root);
});
