export const fetchAllSearches = (query) => (
  $.ajax({
    method: 'GET',
    url: `api/search/${query}`,
  })
);
