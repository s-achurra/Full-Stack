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

    let groups;
    let title;
    if (this.props.match.params.category) {
      groups = this.props.groups.filter(group =>
        group.category.toLowerCase() === this.props.match.params.category)
    } else {
      groups = this.props.groups;
    }

    if (this.props.groups === undefined) {
      return ( <div>loading...</div> )
    }

    this.props.match.params.category ?
      title = this.props.match.params.category.toUpperCase() :
      title = "ALL GROUPS"

    if (this.props.groups) {
      return (
        <section className="groupIndex">
          <section className="groupIndexHeader">
            <h1>{title}</h1>
          </section>
          <section className="groupIndexList">
            <ul>
              {groups.map(group => <GroupIndexItem
                key={group.id} group={group} />)}
            </ul>
          </section>
        </section>
      );
    }
  }
}

export default GroupIndex;
