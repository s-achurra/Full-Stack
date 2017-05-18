import React from 'react';
import { withRouter } from 'react-router-dom';

class GroupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      location: '',
      category: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
  e.preventDefault();
  this.props.createPost(this.state)
    .then(this.state = {
      title: '',
      description: '',
      location: '',
      category: '',
    });
  }


  render() {
    return(
      <section className="form">
        <h3>Create a Group</h3>
        <form onSubmit={this.handleSubmit}>

          <span>Title</span>
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('title')}
            />

          <br />

          <span>Description</span>
            <input
              type="text"
              value={this.state.description}
              onChange={this.update('description')}
            />

            <br />

          <span>Location</span>
            <input
              type="text"
              value={this.state.location}
              onChange={this.update('location')}
            />

            <br />

          <span>Category</span>
            <input
              type="text"
              value={this.state.category}
              onChange={this.update('category')}
            />

            <br />

          <input className="button" type="submit" value="Submit"/>
        </form>
      </section>
    );
  }

}

export default GroupForm;
