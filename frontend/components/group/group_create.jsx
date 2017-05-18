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
  console.log(this.state);
  this.props.createGroup(this.state)
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


          <span>Description</span>
            <input
              type="text"
              value={this.state.description}
              onChange={this.update('description')}
            />


          <span>Location</span>
            <input
              type="text"
              value={this.state.location}
              onChange={this.update('location')}
            />


          <span>Category</span>
          <select
            value={this.state.category}
            onChange={this.update('category')}>
            <option value="" disabled defaultValue>Select a Category</option>
            <option value="Outdoors">Outdoors</option>
            <option value="Tech">Tech</option>
            <option value="Health">Health</option>
            <option value="Learning">Learning</option>
            <option value="Food">Food</option>
            <option value="Writing">Writing</option>
            <option value="Language">Language</option>
            <option value="Family">Family</option>
            <option value="Health">Health</option>
          </select>

          <input className="button" type="submit" value="Submit"/>
        </form>
      </section>
    );
  }

}

export default GroupForm;
