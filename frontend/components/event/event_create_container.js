import { connect } from 'react-redux';
import EventCreate from './event_create';
import { createEvent, fetchEvents } from '../../actions/event_actions';

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = dispatch => ({
  createEvent: (event) => (dispatch(createEvent(event)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventCreate);
