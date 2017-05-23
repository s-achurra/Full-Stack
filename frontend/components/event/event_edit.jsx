import React from 'react';
import { withRouter } from 'react-router-dom';

class EventEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: parseInt(this.props.match.params.id),
      title: '',
      description: '',
      location: '',
      image_url: '',
      date: '',
      start_time: '',
      end_time: '',
      group_id: '',
      host_id: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentWillMount() {
    this.props.fetchEvent(parseInt(this.props.match.params.id));
  }

  componentWillReceiveProps(newProps) {
    if (newProps.state.event.event.title) {
      this.state.title = newProps.state.event.event.title;
      this.state.description = newProps.state.event.event.description;
      this.state.location = newProps.state.event.event.location;
      this.state.image_url = newProps.state.event.event.image_url;
      this.state.date = newProps.state.event.event.date;
      this.state.start_time = newProps.state.event.event.start_time;
      this.state.end_time = newProps.state.event.event.end_time;
      this.state.group_id = newProps.state.event.event.group_id;
      this.state.host_id = newProps.state.event.event.host_id;
    }
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
  e.preventDefault();
  if (this.state.image_url === '') {
    this.state.image_url = "https://secure.meetupstatic.com/s/img/041003812446967856280/logo/svg/logo--script.svg";
  }
  this.props.updateEvent(this.state)
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

export default EventEdit;
