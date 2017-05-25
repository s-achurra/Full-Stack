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
      image_url: '',
      owner_id: ''
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
  this.state.owner_id = this.props.state.session.currentUser.id;
  this.props.createGroup(this.state)
    .then(group => window.location.href=`/#/group/${group.id}`);
  }


  render() {

    let errors;
    if (this.props.errors) {
      errors = this.props.errors.map( (error, idx) => <p key={idx}>{error}</p>);
    }
    // TODO: Errors aren't working

    return(
      <section className="createGroup">
        <section className="form">
          <header>
            <h1>Create a Group</h1>
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

            <span>Group Image URL</span>
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
            </select>

            <button className="button" onClick={this.handleSubmit}>Create Group</button>
            {errors}
          </form>
        </section>
      </section>
    );
  }

}

export default GroupForm;
