import { connect } from 'react-redux';
import GroupCalendar from './group_calendar';
import { updateGroup, fetchGroup } from '../../actions/group_actions';

const mapStateToProps = ({group}) => ({
  group
});

const mapDispatchToProps = dispatch => ({
  fetchGroup: (id) => (dispatch(fetchGroup(id))),
  updateGroup: (group) => (dispatch(updateGroup(group)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupCalendar);
