import { connect } from 'react-redux';
import EventEdit from './event_edit';
import { updateEvent, fetchEvent } from '../../actions/event_actions';

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = dispatch => ({
  fetchEvent: (id) => (dispatch(fetchEvent(id))),
  updateEvent: (event) => (dispatch(updateEvent(event)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventEdit);
