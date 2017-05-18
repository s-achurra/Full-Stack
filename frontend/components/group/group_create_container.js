import { connect } from 'react-redux';
import GroupCreate from './group_create';
import { createGroup, fetchGroups } from '../../actions/group_actions';

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = dispatch => ({
  createGroup: (group) => (dispatch(createGroup(group))),
  fetchGroups: () => (dispatch(fetchGroups()))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupCreate);
