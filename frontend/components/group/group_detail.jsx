import React from 'react';
import { Route } from 'react-router-dom';

class GroupDetail extends React.Component {

  componentDidMount() {
    this.props.fetchGroup(parseInt(this.props.match.params.id));
  }

  render() {
    return (
      <section className="detail">
        <h1>{this.props.group.title}</h1>
        <h3>{this.props.group.description}</h3>
        <h3>{this.props.group.location}</h3>
        <h3>{this.props.group.category}</h3>
      </section>
    );
  }
}

export default GroupDetail;
