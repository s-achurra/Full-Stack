import React from 'react';
import { withRouter } from 'react-router-dom';

class GroupEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: parseInt(this.props.match.params.id),
      title: '',
      description: '',
      location: '',
      category: '',
      image_url: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

componentWillMount() {
  this.props.fetchGroup(parseInt(this.props.match.params.id));
}

componentWillReceiveProps(newProps) {
  if (newProps.state.group.group.title) {
    this.state.title = newProps.state.group.group.title;
    this.state.description = newProps.state.group.group.description;
    this.state.location = newProps.state.group.group.location;
    this.state.category = newProps.state.group.group.category;
    this.state.image_url = newProps.state.group.group.image_url;
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
  this.props.updateGroup(this.state)
    .then(group => window.location.href=`/#/group/${this.state.id}`);
  }


  render() {

    let errors;
    if (this.props.errors) {
      errors = this.props.errors.map( (error, idx) => <p key={idx}>{error}</p>);
    }

    return(
      <section className="createGroup">
        <section className="form">
          <header>
            <h1>Update Group</h1>
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

            <button className="button" onClick={this.handleSubmit}>Update Group</button>
            {errors}
          </form>
        </section>
      </section>
    );
  }

}

export default GroupEdit;
