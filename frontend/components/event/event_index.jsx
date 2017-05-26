import React from 'react';
import { Link, Route } from 'react-router-dom';
import EventIndexItem from './event_index_item';
import EventCreateContainer from './event_create_container';


class EventIndex extends React.Component {
  constructor(props) {
    super(props);
    this.deleteEvent = this.deleteEvent.bind(this);
  }

  componentWillMount() {
    this.props.fetchAllEvents();
  }

  deleteEvent(e) {
    e.preventDefault();
    this.props.deleteEvent(parseInt(e.target.id));
  }

  render() {

    let events;
    if (this.props.match.params.category) {
      events = this.props.events.filter(event =>
        event.category.toLowerCase() === this.props.match.params.category)
    } else {
      events = this.props.events;
    }

    if (this.props.events === undefined) {
      return ( <div className="loader">Loading...</div> )
    }

    if (this.props.events) {
      return (
        <section className="eventIndex">
          <section className="eventIndexHeader">
            <h1>All Events</h1>
          </section>
          <section className="eventIndexList">
            <ul>
              {events.map(event => <EventIndexItem
                key={event.id} event={event} />)}
            </ul>
          </section>
        </section>
      );
    }
  }
}

export default EventIndex;
