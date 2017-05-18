import React from 'react';
import { Link, Route } from 'react-router-dom';
import GroupDetailContainer from './group_detail_container';

const GroupIndexItem = ({ group }) => (
  <li>
    <Link to={`group/${group.id}`}>
      {group.title}
    </Link>
    <button id={`${group.id}`} onClick={this.deleteGroup}>Delete</button>
  </li>
);

export default GroupIndexItem;
