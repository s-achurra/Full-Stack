import React from 'react';
import { Link, Route } from 'react-router-dom';

const SeatchResultItem = ({ group, removeSearch }) => (
  <li>
    <Link to={`/group/${group.id}`} onClick={removeSearch}>
    <img className="groupImage" src={group.image_url}/>
    <p>{group.title}</p>
    </Link>
  </li>
);

export default SeatchResultItem;
