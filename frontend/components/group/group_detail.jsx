import React from 'react';
import { Route, Link } from 'react-router-dom';
import GroupDetailEventItem from './group_detail_event_item';
import GroupUserFollowImage from './group_user_follow_image';
import GroupCalendar from './group_calendar';
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
    if (this.props.group && this.props.group.id !== parseInt(this.props.match.params.id)) {
      this.props.clearGroup()
    }
    this.props.fetchGroup(parseInt(this.props.match.params.id));
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchGroup(parseInt(newProps.match.params.id));
    }
  }

  handleDelete(e) {
    e.preventDefault();
    if (this.props.current_user &&
      this.props.current_user.id === this.props.group.owner_id) {
      let check = confirm("Are you sure you would like to delete this group?");
      if (check) {
        this.props.deleteGroup(e.target.id)
        .then(window.location.href="#/groups");
      }
    } else {
      alert("You must own an group to delete. Log in to delete.");
    }
  }

  handleEdit(e) {
    e.preventDefault();
    if (this.props.current_user &&
      this.props.current_user.id === this.props.group.owner_id) {
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
      }).then(this.props.fetchGroup(parseInt(this.props.match.params.id)));
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
    this.props.fetchGroup(parseInt(this.props.match.params.id));
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
      return ( <div className="loader">Loading...</div> )
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
                <button className="button" id={`${this.props.group.id}`} onClick={this.handleFollow}>Join Group</button>
              }

              <button className="button" onClick={this.handleCreateEvent}>Create Event</button>

              <Link to={`./calendar/${this.props.group.id}`} className='button'>Group Calendar</Link>
            </section>

            <section className="groupColumns">

              <section className="groupDetailLeft">
                <img className="groupImage" src={this.props.group.image_url}/>
                <h3>Location: </h3>
                <p>{this.props.group.location}</p>
                <h3>Category: </h3>
                <p>{this.props.group.category}</p>
                <h3>Owner: </h3>
                <img className="ownerImage" src={this.props.group.owner.image_url}/>
                <p>Username: {this.props.group.owner.username}</p>
                <p>First Name: {this.props.group.owner.first_name}</p>

              </section>

              <section className="groupDetailRight">
                <section className="groupDetails">
                <h3>Group Description:</h3>
                  <p>{this.props.group.description}</p>

                  <h3>Group Members:</h3>
                  <ul className="groupUserImageList">
                    { this.props.group.users.map(
                      user => <GroupUserFollowImage key={user.id} user={user} />
                    )
                    }
                  </ul>

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
