import React from 'react';
import { Link, Route } from 'react-router-dom';

const GroupIndexItem = ({ group }) => (
  <li key={group.id}>
    <Link to={`/group/${group.id}`}>
    <img className="groupImage" src={group.image_url}/>
    <p>{group.title}</p>
    </Link>
  </li>
);

export default GroupIndexItem;
