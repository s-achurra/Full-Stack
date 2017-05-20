import merge from 'lodash/merge';

import {
  RECEIVE_EVENT,
  RECEIVE_ERRORS
} from '../actions/event_actions';

const defaultState = {
  event: null,
  errors: []
};

const EventReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENT:
      return {
        event: action.event,
        errors: []
      };
    case RECEIVE_ERRORS:
    return {
      events: null,
      errors: action.errors
    };
    default:
      return state;
  }
};

export default EventReducer;
