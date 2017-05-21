import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllEvents, deleteEvent } from '../../actions/event_actions';
import { selectAllEvents } from '../../selectors/event_selectors';
import EventIndex from './event_index';

const mapStateToProps = state => ({
  events: selectAllEvents(state)
});

const mapDispatchToProps = dispatch => ({
  fetchAllEvents: () => (dispatch(fetchAllEvents())),
  deleteEvent: (id) => (dispatch(deleteEvent(id)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventIndex);
