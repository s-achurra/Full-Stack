import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import EventDetail from './event_detail';
import { fetchEvent, deleteEvent } from '../../actions/event_actions';

const mapStateToProps = (state) => ({
  event: state.event.event,
  current_user: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchEvent: (id) => (dispatch(fetchEvent(id))),
  deleteEvent: (id) => (dispatch(deleteEvent(id)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetail);
