import React from 'react';
import { Link, Route } from 'react-router-dom';

const EventDetailUserItem = ({ user }) => (
  <li>
    <img className="userImage" src={user.image_url}/>
    <section className="userListInfo">
      <p>{user.username}</p>
    </section>
  </li>
);

export default EventDetailUserItem;
