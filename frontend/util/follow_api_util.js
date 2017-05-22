export const postFollow = (follow) => (
  $.ajax({
    method: 'POST',
    url: 'api/follows',
    data: { follow: follow }
  })
);

export const deleteFollow = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/follows/${id}`
  })
);
