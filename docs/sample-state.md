```js
{
  currentUser: {
    id: 1,
    username: "string"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createEvent: {errors: ["body can't be blank"]}
    createGroup: {errors: ["body can't be blank"]}
  },
  event: {
    1: {
      title: "string",
      description: "strings",
      date: "",
      location: "",
      creator_id: 1,
      group_id: 1,
      comments: {
        1: {
          id: 1
          message: "Coding"
          author_id: "Coding"
        }
      }
    }
  },
  user: {
    1: {
      username: "name",
      about: "text",
      image_link: "url"
      first_name: "name",
      last_name: "name",
      events:  {
        1: {
          event_id: 1
        }
      }
      groups: {
        1: {
          group_id: 1
        }
      }
    }
  }
  group: {
    1: {
      title: "Redux",
      creator_id: 1,
      description: "is cool",
      events: {
        1: {
          event_id: 1
        }
      }
      members: {
        1: {
          member_id: 1
        }
      }
    }
  }
}
```
