import React from 'react';
import { Route, Link } from 'react-router-dom';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

class GroupCalendar extends React.Component {

  componentWillMount() {
    BigCalendar.setLocalizer(
      BigCalendar.momentLocalizer(moment)
    );
  }

  render() {
    let date = [
      {
        'title': 'Meeting',
        'start': new Date(2017, 3, 12, 10, 30, 0, 0),
        'end': new Date(2017, 3, 12, 12, 30, 0, 0),
        desc: 'Pre-meeting meeting, to prepare for the meeting'
      }
    ]
    
    return(
      <div className="calendar">
        <BigCalendar
        events={date}
        defaultDate={new Date()}
        />
      </div>
    );
  }
}

export default GroupCalendar;
