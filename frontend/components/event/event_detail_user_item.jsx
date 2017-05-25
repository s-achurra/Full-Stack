import React from 'react';
import { Link, Route } from 'react-router-dom';

const EventDetailUserItem = ({ user }) => (
  <li>
    <Link to="/" className="inactiveLink">
    <img className="userImage" src={user.image_url}/>
    <section className="userListInfo">
      <span>Username: {user.username}</span>
      <br />
      <span>First Name: {user.first_name}</span>
    </section>
    </Link>
  </li>
);

export default EventDetailUserItem;
