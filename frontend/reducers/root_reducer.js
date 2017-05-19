import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import GroupsReducer from './groups_reducer';
import GroupReducer from './group_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  groups: GroupsReducer,
  group: GroupReducer
});

export default rootReducer;
