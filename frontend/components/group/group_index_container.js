import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllGroups, deleteGroup } from '../../actions/post_actions';
import { selectAllGroups } from '../../reducers/selectors';
import GroupIndex from './post_index';

const mapStateToProps = state => ({
  posts: selectAllGroups(state)
});

const mapDispatchToProps = dispatch => ({
  fetchAllGroups: () => (dispatch(fetchAllGroups())),
  deleteGroup: (id) => (dispatch(deleteGroup(id)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupIndex);
