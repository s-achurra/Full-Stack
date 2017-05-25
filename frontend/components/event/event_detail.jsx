import React from 'react';
import { Route, Link } from 'react-router-dom';
import EventDetailUserItem from './event_detail_user_item';
import { postRsvp, deleteRsvp } from '../../util/rsvp_api_util';

class EventDetail extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleRsvp = this.handleRsvp.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  componentWillMount() {
    this.props.fetchEvent(parseInt(this.props.match.params.id));
  }

  handleDelete(e) {
    e.preventDefault();
    if (this.props.current_user &&
      this.props.current_user.id === this.props.event.host.id) {
      let check = confirm("Are you sure you would like to delete this event?");
      if (check) {
          let groupId = this.props.event.group.id
          this.props.deleteEvent(e.target.id)
          .then(window.location.href=`#/group/${groupId}`);
      }
    } else {
      alert("You must own an event to delete. Log in to delete.")
    }
  }

  handleEdit(e) {
    e.preventDefault();
    if (this.props.current_user &&
      this.props.current_user.id === this.props.event.host.id) {
      window.location.href=`#/event/edit/${e.target.id}`;
    } else {
      alert("You must own an event to update. Log in to update.")
    }
  }

  handleRsvp(e) {
    e.preventDefault();
    if (this.props.current_user) {
      postRsvp({
        user_id: this.props.current_user.id,
        event_id: this.props.event.id
      }).then(this.componentWillMount());
    } else {
      alert("You must log in to RSVP for an Event");
    }
  }

  handleLeave(e) {
    e.preventDefault();

    let event = this.props.event.id;
    let user = this.props.current_user.id;

    this.props.event.rsvps.forEach(function(rsvp){
      if (rsvp.event_id === event && rsvp.user_id === user) {
        deleteRsvp(rsvp.id)
      }
    })
    this.componentWillMount();
  }

  is_rsvped(){
    let rsvped = false;
    if (this.props.current_user) {
      let id = this.props.current_user.id;
      this.props.event.users.forEach(function(user){
        if (user.id == id) {
          rsvped = true;
        }
      });
    }
    return rsvped;
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

            <section className="eventDetailButtons">
              <button className="button" id={`${this.props.event.id}`} onClick={this.handleEdit}>Update Event</button>

              {
                this.is_rsvped() ?
                <button className="button" id={`${this.props.event.id}`} onClick={this.handleLeave}>Un-RSVP</button> :
                <button className="button" id={`${this.props.event.id}`} onClick={this.handleRsvp}>RSVP</button>
              }

            </section>

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
                <img className="hostImage" src={this.props.event.host.image_url}/>
                <p>Username: {this.props.event.host.username}</p>
                <p>First Name: {this.props.event.host.first_name}</p>
              </section>

              <section className="eventDetailRight">
                <section className="eventDetails">
                <h3>Event Description:</h3>
                  <p>{this.props.event.description}</p>
                </section>
                <section className="groupEvents">
                  <h3>RSVP List</h3>
                  <ul className="groupEventRsvps">
                    { this.props.event.users.map(
                    user => <EventDetailUserItem key={user.id}
                    user={user} />) }
                  </ul>
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
