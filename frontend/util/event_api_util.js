export const fetchGroups = () => (
  $.ajax({
    method: 'GET',
    url: 'api/events'
  })
);

export const fetchGroup = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/events/${id}`
  })
);

export const createGroup = (event) => (
  $.ajax({
    method: 'POST',
    url: 'api/events',
    data: { event: event }
  })
);

export const deleteGroup = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/events/${id}`
  })
);

export const updateGroup = (event) => (
  $.ajax({
    method: 'PATCH',
    url: `api/events/${event.id}`,
    data: { event }
  })
);
