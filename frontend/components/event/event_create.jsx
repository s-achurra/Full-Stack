import React from 'react';
import { withRouter } from 'react-router-dom';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      location: '',
      image_url: '',
      date: '',
      start_time: '',
      end_time: '',
      group_id: this.props.state.group.group.id,
      host_id: this.props.state.session.currentUser.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
  e.preventDefault();
  if (this.state.image_url === '') {
    this.state.image_url = "https://secure.meetupstatic.com/s/img/041003812446967856280/logo/svg/logo--script.svg";
  }
  this.props.createEvent(this.state)
    .then(event => window.location.href=`/#/event/${event.id}`);
  }


  render() {

    let errors;
    if (this.props.errors) {
      errors = this.props.errors.map( (error, idx) => <p key={idx}>{error}</p>);
    }
    // TODO: Errors aren't working

    return(
      <section className="createEvent">
        <section className="form">
          <header>
            <h1>Create a Event</h1>
          </header>
          <form>

            <span>Title</span>
              <input
                type="text"
                value={this.state.title}
                onChange={this.update('title')}
              />


            <span>Location</span>
              <input
                type="text"
                value={this.state.location}
                onChange={this.update('location')}
              />

            <span>Event Image URL</span>
              <input
                type="text"
                value={this.state.image_url}
                onChange={this.update('image_url')}
              />

            <span>Description</span>
              <textarea
              value={this.state.description}
              onChange={this.update('description')}>
              </textarea>

              <span>Event Date</span>
              <input
              type="date"
              value={this.state.date}
              onChange={this.update('date')}
              />

              <span>Event Start Time</span>
              <input
              type="time"
              value={this.state.start_time}
              onChange={this.update('start_time')}
              />

              <span>Event Start Time</span>
              <input
              type="time"
              value={this.state.end_time}
              onChange={this.update('end_time')}
              />

            <button className="button" onClick={this.handleSubmit}>Create Event</button>
            {errors}
          </form>
        </section>
      </section>
    );
  }

}

export default EventForm;
