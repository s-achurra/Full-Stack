import React from 'react';
import { Route } from 'react-router-dom';

class GroupDetail extends React.Component {

  componentWillMount() {
    this.props.fetchGroup(parseInt(this.props.match.params.id));
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
                <div>left section</div>
                <label>Location:</label>
                <h3>{this.props.group.location}</h3>
                <label>Category:</label>
                <h3>{this.props.group.category}</h3>
              </section>

              <section className="groupDetailRight">
                <section className="groupDetails">
                <label>Group Description:</label>
                  <h3>{this.props.group.description}</h3>
                </section>
                <section className="groupEventsList">
                  <div>Events List</div>
                </section>
              </section>

            </section>

        </section>
      );
    }
  }
}

export default GroupDetail;
