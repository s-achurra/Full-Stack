import React from 'react';
import { Link, Route } from 'react-router-dom';

const GroupIndexItem = ({ group }) => (
  <li>
    <Link to={`/group/${group.id}`}>
    <img className="groupImage" src={group.image_url}/>
    <p>{group.title}</p>
    </Link>
  </li>
);

export default GroupIndexItem;
