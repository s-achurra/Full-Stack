import React from 'react';
import { Link, Route } from 'react-router-dom';
import GroupIndexItem from './group_index_item';
import GroupCreateContainer from './group_create_container';


class GroupIndex extends React.Component {
  constructor(props) {
    super(props);
    this.deleteGroup = this.deleteGroup.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllGroups();
  }

  deleteGroup(e) {
    e.preventDefault();
    this.props.deleteGroup(parseInt(e.target.id));
  }

  render() {

    let generateGroup = this.props.groups.map( group =>
      <li key={`${group.id}`}>
        <Link to={`group/${group.id}`}>
          {group.title}
        </Link>
        <br/>
        <Link to={`group/edit/${group.id}`} className="edit">
          Edit
        </Link>
        <button className="button" id={`${group.id}`} onClick={this.deleteGroup}>Delete</button>
      </li>
    );

    if (this.props.groups) {
      return (
        <div className="index">
          <h1>All Groups</h1>
          <section className="indexColumns">
            <ul>
              {generateGroup}
            </ul>
            <GroupCreateContainer />
          </section>
        </div>
      );
    }
  }
}

export default GroupIndex;
