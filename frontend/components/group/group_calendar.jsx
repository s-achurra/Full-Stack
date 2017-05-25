import React from 'react';
import { Route, Link } from 'react-router-dom';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

class GroupCalendar extends React.Component {
  constructor(props){
    super(props);
    this.events = [];
    this.setupEvents = this.setupEvents.bind(this);
  }

  componentWillMount() {
    this.props.fetchGroup(parseInt(this.props.match.params.id));
    BigCalendar.setLocalizer(
      BigCalendar.momentLocalizer(moment)
    );
  }

  setupEvents() {

  }

  render() {

    if (this.props.group.group) {
      this.events = this.props.group.group.events.map(event => {
        let start_time = new Date(event.date_time);
        return ({
          'title': <Link to={`/event/${event.id}}`}>{event.title}</Link>,
          'start': start_time,
          'end': start_time
        });
      });
    }

      if (this.props.group.group) {
        return( <section className="calendar">
          <h1>{this.props.group.group.title}</h1>

          <Link to={`/group/${this.props.group.group.id}`}
            className="button"> Group Home </Link>

          <br />
          <br />

          <BigCalendar
          events={this.events}
          defaultDate={new Date()}
          />
        </section>
      );
      } else {
        return(
          <section>loading</section>
        );
      }
  }
}

export default GroupCalendar;
