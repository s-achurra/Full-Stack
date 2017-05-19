import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllGroups, deleteGroup } from '../../actions/group_actions';
import { selectAllGroups } from '../../selectors/group_selectors';
import GroupIndex from './group_index';

const mapStateToProps = state => ({
  groups: selectAllGroups(state)
});

const mapDispatchToProps = dispatch => ({
  fetchAllGroups: () => (dispatch(fetchAllGroups())),
  deleteGroup: (id) => (dispatch(deleteGroup(id)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupIndex);
