export const FETCH_ALL_GROUPS = 'FETCH_ALL_GROUPS';
export const FETCH_GROUP = 'FETCH_GROUP';
export const CREATE_GROUP = 'CREATE_GROUP';
export const DELETE_GROUP = 'DELETE_GROUP';
export const UPDATE_GROUP = 'UPDATE_GROUP';

export const RECEIVE_ALL_GROUPS = 'RECEIVE_ALL_GROUPS';
export const RECEIVE_GROUP = 'RECEIVE_GROUP';
export const RECEIVE_NEW_GROUP = 'RECEIVE_NEW_GROUP';


import * as APIUtil from '../util/group_api_util';

// API FUNCTIONS

export const fetchAllGroups = () => dispatch => (
  APIUtil.fetchGroups().then(groups => dispatch(receiveAllGroups(groups)))
);

export const fetchGroup = id => dispatch => (
  APIUtil.fetchGroup(id).then(group => dispatch(receiveGroup(group)))
);

export const createGroup = group => dispatch => (
  APIUtil.createGroup(group).then(dispatch(fetchAllGroups()))
);

export const updateGroup = group => dispatch => (
  APIUtil.updateGroup(group)
  .then(updatedGroup => dispatch(receiveGroup(updatedGroup)))
);

export const deleteGroup = id => dispatch => (
  APIUtil.deleteGroup(id).then(dispatch(fetchAllGroups()))
);

// ACTION OBJECTS

export const receiveAllGroups = (groups) => ({
  type: RECEIVE_ALL_GROUPS,
  groups
});

export const receiveGroup = (group) => ({
  type: RECEIVE_GROUP,
  group
});

export const receiveNewGroup = (group) => ({
  type: RECEIVE_NEW_GROUP,
  group
});
