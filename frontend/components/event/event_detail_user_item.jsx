import React from 'react';
import { Link, Route } from 'react-router-dom';

const EventDetailUserItem = ({ user }) => (
  <li>
    <Link to="/" className="inactiveLink">
    <img className="userImage" src={user.image_url}/>
    <section className="userListInfo">
      <span>{user.username}</span>
    </section>
    </Link>
  </li>
);

export default EventDetailUserItem;
