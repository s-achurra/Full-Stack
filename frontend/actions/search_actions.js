export const FETCH_ALL_SEARCHES = 'FETCH_ALL_SEARCHES';
export const RECEIVE_ALL_SEARCHES = 'RECEIVE_ALL_SEARCHES';
import * as APIUtil from '../util/search_api_util';

// API FUNCTIONS

export const fetchAllSearches = () => dispatch => (
  APIUtil.fetchAllSearches().then(searches =>
    dispatch(receiveAllSearches(searches)))
);

// ACTION OBJECTS

export const receiveAllSearches = (searches) => ({
  type: RECEIVE_ALL_SEARCHES,
  searches
});
