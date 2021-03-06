import React from 'react';
import SearchResultItem from './search_result_item';
import { Link, Route } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.results = [];
    this.query = ''
    this.updateSearch = this.updateSearch.bind(this);
    this.removeSearch = this.removeSearch.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.results = newProps.state.search.searches;
  }

  componentWillMount(){
    document.addEventListener("keydown", this._handleEscDown.bind(this));
  }

  componentWillUnmount(){
    document.addEventListener("keydown", this._handleEscDown.bind(this));
  }

  updateSearch(e) {
    e.preventDefault();
    if (e.target.value) {
      this.query = e.target.value;
      this.props.fetchAllSearches(e.target.value);
    } else {
      this.query = '';
      this.props.fetchAllSearches(undefined);
    }
  }

  _handleEscDown(e) {
    if ( event.keyCode == 27 ) {
      this.removeSearch();
    }
  }

  removeSearch(){
    this.results = [];
    this.query = '';
    this.props.fetchAllSearches(undefined);
  }

  render() {
    if (!this.results) {
      this.results = [];
    }
    return(
      <section className="search">

        <form className="searchBar">
          <input type="text" onChange={this.updateSearch} value={this.query}
           placeholder="Search All Groups"/>
        </form>
        <ul className="searchResults" >
          {this.results.map(group => <SearchResultItem
            key={group.id} group={group} removeSearch={this.removeSearch} />)}
        </ul>
      </section>
    );
  }

}

export default Search;
