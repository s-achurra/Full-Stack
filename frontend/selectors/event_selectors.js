import { values } from 'lodash';

export const selectAllEventss = (state) => values(state.events.events);
