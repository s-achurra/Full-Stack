import merge from 'lodash/merge';

import {
  RECEIVE_GROUP,
  RECEIVE_ERRORS
} from '../actions/group_actions';

const defaultState = {
  group: null,
  errors: []
};

const GroupsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GROUP:
      return {
        group: action.group,
        errors: []
      };
    case RECEIVE_ERRORS:
    return {
      groups: null,
      errors: action.errors
    };
    default:
      return state;
  }
};

export default GroupsReducer;
