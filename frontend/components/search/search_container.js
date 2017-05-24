import { connect } from 'react-redux';
import Search from './search';
import { fetchAllSearches } from '../../actions/search_actions';

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = dispatch => ({
  fetchAllSearches: (query) => (dispatch(fetchAllSearches(query)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Search);
