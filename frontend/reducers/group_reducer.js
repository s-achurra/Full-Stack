import merge from 'lodash/merge';

import {
  RECEIVE_ALL_GROUPS,
  RECEIVE_GROUP,
  RECEIVE_NEW_GROUP,
} from '../actions/group_actions';

const GroupsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_GROUPS:
      return action.groups;
    case RECEIVE_NEW_GROUP:
      const newGroup = {[action.group.id]: action.group};
      return merge({}, state, newGroup);
    case RECEIVE_GROUP:
      return action.groups;
    default:
      return state;
  }
};

export default GroupsReducer;
