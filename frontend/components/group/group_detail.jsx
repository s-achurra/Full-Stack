import React from 'react';
import { Route, Link } from 'react-router-dom';

class GroupDetail extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount() {
    this.props.fetchGroup(parseInt(this.props.match.params.id));
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteGroup(e.target.id)
      .then(window.location.href="#/groups");
  }

  render() {
    if (!this.props.group) {
      return ( <div>loading...</div> )
    } else {
      return (
        <section className="groupDetailPage">


            <header className="groupDetailHeader">
              <h1>{this.props.group.title}</h1>
            </header>

            <section className="groupColumns">

              <section className="groupDetailLeft">
                <img className="groupImage" src={this.props.group.image_url}/>
                <h3>Location: </h3>
                <p>{this.props.group.location}</p>
                <h3>Category: </h3>
                <p>{this.props.group.category}</p>
              </section>

              <section className="groupDetailRight">
                <section className="groupDetails">
                <h3>Group Description:</h3>
                  <p>{this.props.group.description}</p>
                </section>
                <section className="groupEventsList">
                  <h3>Events List</h3>
                </section>
              </section>

            </section>

            <section className="groupDetailButtons">
              <button className="button" id={`${this.props.group.id}`} onClick={this.handleDelete}>Delete Group</button>
            </section>

        </section>
      );
    }
  }
}

export default GroupDetail;
