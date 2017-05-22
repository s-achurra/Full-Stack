import React from 'react';
import { Route, Link } from 'react-router-dom';

class EventDetail extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount() {
    this.props.fetchEvent(parseInt(this.props.match.params.id));
  }

  handleDelete(e) {
    e.preventDefault();
    let groupId = this.props.event.group.id
    this.props.deleteEvent(e.target.id)
      .then(window.location.href=`#/group/${groupId}`);
  }

  render() {
    if (!this.props.event) {
      return ( <div>loading...</div> )
    } else {
      return (
        <section className="eventDetailPage">


            <header className="eventDetailHeader">
              <h1>{this.props.event.title}</h1>
            </header>

            <section className="eventColumns">

              <section className="eventDetailLeft">
                <img className="eventImage" src={this.props.event.image_url}/>
                <h3>Location: </h3>
                <p>{this.props.event.location}</p>
                <h3>Group: </h3>
                <Link to={`/group/${this.props.event.group.id}`} >
                <p>{this.props.event.group.title}</p>
                </Link>
                <h3>Host: </h3>
                <p>{this.props.event.host.username}</p>
              </section>

              <section className="eventDetailRight">
                <section className="eventDetails">
                <h3>Event Description:</h3>
                  <p>{this.props.event.description}</p>
                </section>
              </section>

            </section>

            <section className="eventDetailButtons">
              <button className="button" id={`${this.props.event.id}`} onClick={this.handleDelete}>Delete Event</button>
            </section>

        </section>
      );
    }
  }
}

export default EventDetail;
