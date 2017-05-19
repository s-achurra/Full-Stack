import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import GroupDetail from './group_detail';
import { fetchGroup, deleteGroup } from '../../actions/group_actions';

const mapStateToProps = (state) => ({
  group: state.group.group
});

const mapDispatchToProps = dispatch => ({
  fetchGroup: (id) => (dispatch(fetchGroup(id))),
  deleteGroup: (id) => (dispatch(deleteGroup(id)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupDetail);
