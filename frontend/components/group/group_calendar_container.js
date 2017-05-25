import { connect } from 'react-redux';
import GroupCalendar from './group_calendar';
import { updateGroup, fetchGroup } from '../../actions/group_actions';

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  null,
  null
)(GroupCalendar);
