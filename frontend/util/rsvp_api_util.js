export const postRsvp = (rsvp) => (
  $.ajax({
    method: 'POST',
    url: 'api/rsvps',
    data: { rsvp: rsvp }
  })
);

export const deleteRsvp = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/rsvps/${id}`
  })
);
