import React from 'react';
import { Route, Link } from 'react-router-dom';
import GroupDetailEventItem from './group_detail_event_item';
import { postFollow, deleteFollow } from '../../util/follow_api_util';

class GroupDetail extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCreateEvent = this.handleCreateEvent.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  componentWillMount() {
    this.props.fetchGroup(parseInt(this.props.match.params.id));
  }

  handleDelete(e) {
    e.preventDefault();
    if (this.props.current_user &&
      this.prpos.current_user.id === this.props.group.owner.id) {
      let check = confirm("Are you sure you would like to delete this group?");
      if (check) {
        this.props.deleteGroup(e.target.id)
        .then(window.location.href="#/groups");
      }
    } else {
      alert("You must own an group to delete. Log in to delete.")
    }
  }

  handleEdit(e) {
    e.preventDefault();
    if (this.props.current_user &&
      this.prpos.current_user.id === this.props.group.owner.id) {
      window.location.href=`#/group/edit/${e.target.id}`;
    } else {
      alert("You must own a group to update. Log in to update.");
    }
  }

  handleFollow(e) {
    e.preventDefault();
    if (this.props.current_user) {
      postFollow({
        user_id: this.props.current_user.id,
        group_id: this.props.group.id
      }).then(this.componentWillMount());
    } else {
      alert("You must log in to Follow Groups");
    }
  }

  handleLeave(e) {
    e.preventDefault();

    let group = this.props.group.id;
    let user = this.props.current_user.id;

    this.props.group.follows.forEach(function(follow){
      if (follow.group_id === group && follow.user_id === user) {
        deleteFollow(follow.id)
      }
    })
    this.componentWillMount();
  }

  handleCreateEvent(e) {
    e.preventDefault();
    if (this.props.current_user) {
      window.location.href=`#/event/new`;
    } else {
      alert("You must log in to create an Event");
    }
  }

  is_followed(){
    let followed = false;
    if (this.props.current_user) {
      let id = this.props.current_user.id;
      this.props.group.users.forEach(function(user){
        if (user.id == id) {
          followed = true;
        }
      });
    }
    return followed;
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

            <section className="groupDetailButtons">
              <button className="button" id={`${this.props.group.id}`} onClick={this.handleEdit}>Update Group</button>

              {
                this.is_followed() ?
                <button className="button" id={`${this.props.group.id}`} onClick={this.handleLeave}>Leave Group</button> :
                <button className="button" id={`${this.props.group.id}`} onClick={this.handleFollow}>Follow Group</button>
              }

              <button className="button" onClick={this.handleCreateEvent}>Create Event</button>
            </section>

            <section className="groupColumns">

              <section className="groupDetailLeft">
                <img className="groupImage" src={this.props.group.image_url}/>
                <h3>Location: </h3>
                <p>{this.props.group.location}</p>
                <h3>Category: </h3>
                <p>{this.props.group.category}</p>to="/event/new"
                <h3>Creator: </h3>
                <p>{this.props.group.owner.username}</p>
              </section>

              <section className="groupDetailRight">
                <section className="groupDetails">
                <h3>Group Description:</h3>
                  <p>{this.props.group.description}</p>
                </section>
                <section className="groupEvents">
                  <h3>Events List</h3>
                  <ul className="groupEventsItems">
                    { this.props.group.events.map(
                      event => <GroupDetailEventItem key={event.id}
                      event={event} />) }
                  </ul>
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
