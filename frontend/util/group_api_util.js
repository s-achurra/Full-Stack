export const fetchGroups = () => (
  $.ajax({
    method: 'GET',
    url: 'api/groups'
  })
);

export const fetchGroup = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/groups/${id}`
  })
);

export const createGroup = (group) => (
  $.ajax({
    method: 'POST',
    url: 'api/groups',
    data: { group: group }
  })
);

export const deletePost = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/groups/${id}`
  })
);

export const updatePost = (group) => (
  $.ajax({
    method: 'PATCH',
    url: `api/groups/${group.id}`,
    data: { group }
  })
);
