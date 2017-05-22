import React from 'react';
import { Link, Route } from 'react-router-dom';

const GroupDetailEventItem = ({ event }) => (
  <li>
    <Link to={`/event/${event.id}`}>
    <img className="eventImage" src={event.image_url}/>
    <section className="eventListInfo">
      <p>{event.title}</p>
      <p>{event.location}</p>
      <p>{event.start_time}</p>
    </section>
    </Link>
  </li>
);

export default GroupDetailEventItem;
