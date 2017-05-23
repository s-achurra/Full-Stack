export const FETCH_ALL_EVENTS = 'FETCH_ALL_EVENTS';
export const FETCH_EVENT = 'FETCH_EVENT';
export const CREATE_EVENT = 'CREATE_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';

export const RECEIVE_ALL_EVENTS = 'RECEIVE_ALL_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const RECEIVE_NEW_EVENT = 'RECEIVE_NEW_EVENT';
export const RECEIVE_EVENT_ERRORS = "RECEIVE_EVENT_ERRORS";

import * as APIUtil from '../util/event_api_util';

// API FUNCTIONS

export const fetchAllEvents = () => dispatch => (
  APIUtil.fetchEvents().then(events => dispatch(receiveAllEvents(events)))
);

export const fetchEvent = id => dispatch => (
  APIUtil.fetchEvent(id).then(event => dispatch(receiveEvent(event)))
);

export const createEvent = event => dispatch => (
  APIUtil.createEvent(event).then(dispatch(fetchAllEvents()),
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateEvent = event => dispatch => (
  APIUtil.updateEvent(event)
  .then(updatedEvent => dispatch(receiveEvent(updatedEvent)))
);

export const deleteEvent = id => dispatch => (
  APIUtil.deleteEvent(id).then(dispatch(fetchAllEvents()))
);

// ACTION OBJECTS

export const receiveAllEvents = (events) => ({
  type: RECEIVE_ALL_EVENTS,
  events
});

export const receiveEvent = (event) => ({
  type: RECEIVE_EVENT,
  event
});

export const receiveNewEvent = (event) => ({
  type: RECEIVE_NEW_EVENT,
  event
});

export const receiveErrors = errors => ({
  type: RECEIVE_EVENT_ERRORS,
  errors
});
