import merge from 'lodash/merge';

import {
  RECEIVE_ALL_GROUPS,
  RECEIVE_NEW_GROUP,
  RECEIVE_GROUP_ERRORS
} from '../actions/group_actions';

const defaultState = {
  groups: null,
  errors: []
};

const GroupsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_GROUPS:
      return {
        groups: action.groups,
        errors: []
      };
    case RECEIVE_NEW_GROUP:
      const newGroup = {[action.group.id]: action.group};
      return merge({}, state, newGroup);
    case RECEIVE_GROUP_ERRORS:
    return {
      groups: null,
      errors: action.errors
    };
    default:
      return state;
  }
};

export default GroupsReducer;
