import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import GroupDetail from './group_detail';
import { fetchGroup, clearGroup, deleteGroup } from '../../actions/group_actions';

const mapStateToProps = (state) => ({
  group: state.group.group,
  current_user: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchGroup: (id) => (dispatch(fetchGroup(id))),
  clearGroup: () => (dispatch(clearGroup())),
  deleteGroup: (id) => (dispatch(deleteGroup(id)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupDetail);
