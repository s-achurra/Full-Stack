import merge from 'lodash/merge';

import {
  RECEIVE_ALL_EVENTS,
  RECEIVE_NEW_EVENT,
  RECEIVE_ERRORS
} from '../actions/event_actions';

const defaultState = {
  events: null,
  errors: []
};

const EventsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_EVENTS:
      return {
        events: action.events,
        errors: []
      };
    case RECEIVE_NEW_EVENT:
      const newEvent = {[action.event.id]: action.event};
      return merge({}, state, newEvent);
    case RECEIVE_ERRORS:
    return {
      events: null,
      errors: action.errors
    };
    default:
      return state;
  }
};

export default EventsReducer;
