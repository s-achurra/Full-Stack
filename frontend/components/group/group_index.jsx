import React from 'react';
import { Link, Route } from 'react-router-dom';
import GroupIndexItem from './group_index_item';
import GroupCreateContainer from './group_create_container';


class GroupIndex extends React.Component {
  constructor(props) {
    super(props);
    this.deleteGroup = this.deleteGroup.bind(this);
  }

  componentWillMount() {
    this.props.fetchAllGroups();
  }

  deleteGroup(e) {
    e.preventDefault();
    this.props.deleteGroup(parseInt(e.target.id));
  }

  render() {

    if (this.props.groups === undefined) {
      return ( <div>loading...</div> )
    }

    if (this.props.groups) {
      return (
        <section className="groupIndex">
          <h1>All Groups</h1>
          <section className="groupIndexList">
            <ul>
              {this.props.groups.map(group => <GroupIndexItem
                key={group.id} group={group} />)}
            </ul>
          </section>
        </section>
      );
    }
  }
}

export default GroupIndex;
