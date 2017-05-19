import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import GroupDetail from './group_detail';
import { fetchGroup } from '../../actions/group_actions';

const mapStateToProps = ({groups}) => ({
  groups
});

const mapDispatchToProps = dispatch => ({
  fetchGroup: (id) => (dispatch(fetchGroup(id)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupDetail);
