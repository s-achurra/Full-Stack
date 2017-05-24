import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as SearchActions from './actions/search_actions';

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
    window.fetchAllSearches = SearchActions.fetchAllSearches;

    ReactDOM.render(<Root store={ store }/>, root);
});
