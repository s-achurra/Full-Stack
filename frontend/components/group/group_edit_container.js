import { connect } from 'react-redux';
import GroupEdit from './group_edit';
import { updateGroup, fetchGroup } from '../../actions/group_actions';
import { postFollow, deleteFollow } from '../../util/follow_api_util';

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = dispatch => ({
  fetchGroup: (id) => (dispatch(fetchGroup(id))),
  updateGroup: (group) => (dispatch(updateGroup(group)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupEdit);
