import React from 'react';
import { Link, Route } from 'react-router-dom';

const GroupUserFollowImage = ({ user }) => (
  <li key={user.id}>
    <img className="userFollowImage" src={user.image_url}/>
  </li>
);

export default GroupUserFollowImage;
