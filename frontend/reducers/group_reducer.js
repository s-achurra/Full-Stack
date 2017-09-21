import merge from 'lodash/merge';

import {
  RECEIVE_GROUP,
  CLEAR_GROUP,
  RECEIVE_GROUP_ERRORS
} from '../actions/group_actions';

const defaultState = {
  group: null,
  errors: []
};

const GroupReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GROUP:
      return {
        group: action.group,
        errors: []
      };
      break;
    case CLEAR_GROUP:
      return {
        group: null,
        erros: []
      }
      break;
    case RECEIVE_GROUP_ERRORS:
    return {
      groups: null,
      errors: action.errors
    };
      break;
    default:
      return state;
  }
};

export default GroupReducer;
