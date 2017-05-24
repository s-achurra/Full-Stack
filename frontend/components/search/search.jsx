import React from 'react';
import { Link, Route } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchAllSearches();
  }

  updateSearch(e) {
    e.preventDefault();
  }

  render() {
    return(
      <form className="searchBar">
      <input type="text" onChange={this.updateSearch} placeholder="Search"/>
      <br/>
      <input type="submit" value="Search" className="button"/>
      </form>
    );
  }

}

export default Search;
