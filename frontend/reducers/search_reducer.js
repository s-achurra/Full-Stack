import merge from 'lodash/merge';

import { RECEIVE_ALL_SEARCHES } from '../actions/search_actions';

const SearchReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_SEARCHES:
      return {
        searches: action.searches,
      };
    default:
      return state;
  }
};

export default SearchReducer;
