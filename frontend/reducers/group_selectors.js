import { values } from 'lodash';

export const selectAllGroups = (state) => values(state.group.groups);
