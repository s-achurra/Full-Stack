import React from 'react';
import { Link, Route } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.results = [];
    this.updateSearch = this.updateSearch.bind(this);
  }

  componentWillReceiveProps(newProps) {
    console.log(this.props);
    this.results = newProps.state.search.searches;
    console.log(this.results);
  }

  updateSearch(e) {
    e.preventDefault();
    this.props.fetchAllSearches(e.target.value);
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
