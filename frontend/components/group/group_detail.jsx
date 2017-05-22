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
    this.props.deleteGroup(e.target.id)
      .then(window.location.href="#/groups");
  }

  handleEdit(e) {
    e.preventDefault();
    window.location.href=`#/group/edit/${e.target.id}`;
  }

  handleFollow(e) {
    e.preventDefault();
    postFollow({
      user_id: this.props.current_user.id,
      group_id: this.props.group.id
    }).then(this.componentWillMount());
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
    window.location.href=`#/event/create`;
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
              <section>
                <button className="button" id={`${this.props.group.id}`} onClick={this.handleEdit}>Update Group</button>

                { this.is_followed() ?
                  <button className="button" id={`${this.props.group.id}`} onClick={this.handleLeave}>Leave Group</button> :
                  <button className="button" id={`${this.props.group.id}`} onClick={this.handleFollow}>Follow Group</button>
                }

                <Link to="/event/new" className="button">Create Event</Link>
              </section>
            </header>

            <section className="groupColumns">

              <section className="groupDetailLeft">
                <img className="groupImage" src={this.props.group.image_url}/>
                <h3>Location: </h3>
                <p>{this.props.group.location}</p>
                <h3>Category: </h3>
                <p>{this.props.group.category}</p>
                <h3>Creator: </h3>
                <p>{this.props.group.owner.username}</p>
              </section>

              <section className="groupDetailRight">
                <section className="groupDetails">
                <h3>Group Description:</h3>
                  <p>{this.props.group.description}</p>
                </section>
                <section className="groupEventsList">
                  <h3>Events List</h3>
                  { this.props.group.events.map(
                    event => <GroupDetailEventItem key={event.id}
                    event={event} />) }
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
