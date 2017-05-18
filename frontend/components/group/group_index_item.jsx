import React from 'react';
import { Link, Route } from 'react-router-dom';

const GroupIndexItem = ({ group }) => (
  <li>
    <Link to={`group/${group.id}`}>
      {group.title}
    </Link>
  </li>
);

export default GroupIndexItem;
