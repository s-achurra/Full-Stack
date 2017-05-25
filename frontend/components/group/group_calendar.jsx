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
    return(
      <BigCalendar
      events={[]}
      defaultDate={new Date()}
      />
    );
  }
}

export default GroupCalendar;
