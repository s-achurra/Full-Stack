export const fetchGroups = (query) => (
  $.ajax({
    method: 'GET',
    url: `api/search/${query}`,
  })
);
