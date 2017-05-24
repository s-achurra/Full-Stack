import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import GroupsReducer from './groups_reducer';
import GroupReducer from './group_reducer';
import EventsReducer from './events_reducer';
import EventReducer from './event_reducer';
import SearchReducer from './search_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  groups: GroupsReducer,
  group: GroupReducer,
  events: EventsReducer,
  event: EventReducer,
  search: SearchReducer
});

export default rootReducer;
