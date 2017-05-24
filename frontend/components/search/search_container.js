import { connect } from 'react-redux';
import Search from './search';
import { fetchAllSearches } from '../../actions/search_actions';

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = dispatch => ({
  fetchAllSearches: () => (dispatch(fetchAllSearches()))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Search);
