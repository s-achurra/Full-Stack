import React from 'react';
import { Link, Route } from 'react-router-dom';

const EventIndexItem = ({ event }) => (
  <li>
    <Link to={`/event/${event.id}`}>
    <img className="eventImage" src={event.image_url}/>
    <p>{event.title}</p>
    </Link>
  </li>
);

export default EventIndexItem;
