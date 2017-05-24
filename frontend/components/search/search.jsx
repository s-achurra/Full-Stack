import React from 'react';
import SearchResultItem from './search_result_item';
import { Link, Route } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.results = [];
    this.updateSearch = this.updateSearch.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.results = newProps.state.search.searches;
  }

  updateSearch(e) {
    e.preventDefault();
    if (e.target.value) {
      this.props.fetchAllSearches(e.target.value);
    } else {
      this.props.fetchAllSearches(undefined);
    }
  }

  render() {
    return(
      <section className="search">
        <form className="searchBar">
          <input type="text" onChange={this.updateSearch} placeholder="Search"/>
          <input type="submit" value="Search" className="button"/>
        </form>
        <ul className="searchResults">
          {this.results.map(group => <SearchResultItem
            key={group.id} group={group} />)}
        </ul>
      </section>
    );
  }

}

export default Search;
