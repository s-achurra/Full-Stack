# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.delete_all

User.create!(
  username: "Guest",
  password: "password"
)

# Group Seed

Group.delete_all

Group.create!(title: "French Cooking", description: "This group is dedicated to learning about French cooking", category: "Food", location: "SF", image_url: "http://www.culinaryschools.org/images/crepes.jpg", owner_id: 1)
Group.create!(title: "Teched Crusaders", description: "We search for all things tech and strive to kepe ahead of the curve. We're always looking for new tech events and product demos.", category: "Tech", location: "SF", image_url: "https://static.pexels.com/photos/177598/pexels-photo-177598.jpeg", owner_id: 1)
Group.create!(title: "Runners Together", description: "If you like running this is the group for you. We have regular group runs discuss equipment and technique and work to keep everyone pushing forward.", category: "Health", location: "SF", image_url: "https://c1.staticflickr.com/4/3790/19300545790_82ac2a3444_b.jpg", owner_id: 1)
Group.create!(title: "Learn Spanish!", description: "All skill levels welcome to prectice and perfect your Spanish skills.", category: "Language", location: "SF", image_url: "http://www.publicdomainpictures.net/pictures/180000/velka/spanish-flag-1464084072Hvb.jpg", owner_id: 1)
Group.create!(title: "HikeUp!", description: "Moutian climbing is our passion and climbing as a group is our pleasure. Advanced climbers only. You'll need to provide your own gear.", category: "Outdoors", location: "SF", image_url: "https://upload.wikimedia.org/wikipedia/commons/1/19/Overhanging_rock_climbing.jpg", owner_id: 1)
Group.create!(title: "Italian Cooking", description: "This group is dedicated to learning about Italian cooking", category: "Food", location: "SF", image_url: "https://static.pexels.com/photos/41320/beef-cheese-cuisine-delicious-41320.jpeg", owner_id: 1)
Group.create!(title: "Ruby Coders", description: "Get out from behind you computers and lets MeetUp. Stay in touch with other developers and discuss the latest tech for Ruby.", category: "Tech", location: "SF", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/2000px-Ruby_logo.svg.png", owner_id: 1)
Group.create!(title: "Parents for Parks", description: "Bring the whole family to the park while meeting other parents.", category: "Family", location: "SF", image_url: "https://upload.wikimedia.org/wikipedia/commons/6/60/Green_Park%2C_London_-_April_2007.jpg", owner_id: 1)
Group.create!(title: "Poetry Pack", description: "Snap Snap Snap. Bring your cool prose to our group events. Listen to poetry from others and discuss what makes good poetry.", category: "Writing", location: "SF", image_url: "https://c1.staticflickr.com/1/5/4757004_69f7ec8fea_z.jpg?zz=1", owner_id: 1)
Group.create!(title: "Teachers Together", description: "This group is all about teachers and keeping up to date with various teaching techniques.", category: "Learning", location: "SF", image_url: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Ghana_school_students_and_teachers.jpg", owner_id: 1)

# Event Create

Event.create!(
  host_id: 1,
  group_id: 1,
  title: "Get together",
  description: "We're just going to gather.",
  location: "SF",
  date: "2017-06-06",
  start_time: "12:00:00"
)

Event.create!(
  host_id: 1,
  group_id: 2,
  title: "Get together",
  description: "We're just going to gather.",
  location: "SF",
  date: "2017-06-06",
  start_time: "12:00:00"
)

Event.create!(
  host_id: 1,
  group_id: 3,
  title: "Get together",
  description: "We're just going to gather.",
  location: "SF",
  date: "2017-06-06",
  start_time: "12:00:00"
)

Event.create!(
  host_id: 1,
  group_id: 4,
  title: "Get together",
  description: "We're just going to gather.",
  location: "SF",
  date: "2017-06-06",
  start_time: "12:00:00"
)

Event.create!(
  host_id: 1,
  group_id: 5,
  title: "Get together",
  description: "We're just going to gather.",
  location: "SF",
  date: "2017-06-06",
  start_time: "12:00:00"
)

Event.create!(
  host_id: 1,
  group_id: 6,
  title: "Get together",
  description: "We're just going to gather.",
  location: "SF",
  date: "2017-06-06",
  start_time: "12:00:00"
)

Event.create!(
  host_id: 1,
  group_id: 7,
  title: "Get together",
  description: "We're just going to gather.",
  location: "SF",
  date: "2017-06-06",
  start_time: "12:00:00"
)

Event.create!(
  host_id: 1,
  group_id: 8,
  title: "Get together",
  description: "We're just going to gather.",
  location: "SF",
  date: "2017-06-06",
  start_time: "12:00:00"
)

Event.create!(
  host_id: 1,
  group_id: 9,
  title: "Get together",
  description: "We're just going to gather.",
  location: "SF",
  date: "2017-06-06",
  start_time: "12:00:00"
)

Event.create!(
  host_id: 1,
  group_id: 10,
  title: "Get together",
  description: "We're just going to gather.",
  location: "SF",
  date: "2017-06-06",
  start_time: "12:00:00"
)

Event.create!(
  host_id: 1,
  group_id: 1,
  title: "Get together",
  description: "We're just going to gather.",
  location: "SF",
  date: "2017-06-06",
  start_time: "12:00:00"
)

Event.create!(
  host_id: 1,
  group_id: 2,
  title: "Get together",
  description: "We're just going to gather.",
  location: "SF",
  date: "2017-06-06",
  start_time: "12:00:00"
)

Event.create!(
  host_id: 1,
  group_id: 3,
  title: "Get together",
  description: "We're just going to gather.",
  location: "SF",
  date: "2017-06-06",
  start_time: "12:00:00"
)

Event.create!(
  host_id: 1,
  group_id: 4,
  title: "Get together",
  description: "We're just going to gather.",
  location: "SF",
  date: "2017-06-06",
  start_time: "12:00:00"
)

Event.create!(
  host_id: 1,
  group_id: 5,
  title: "Get together",
  description: "We're just going to gather.",
  location: "SF",
  date: "2017-06-06",
  start_time: "12:00:00"
)

Event.create!(
  host_id: 1,
  group_id: 6,
  title: "Get together",
  description: "We're just going to gather.",
  location: "SF",
  date: "2017-06-06",
  start_time: "12:00:00"
)

Event.create!(
  host_id: 1,
  group_id: 7,
  title: "Get together",
  description: "We're just going to gather.",
  location: "SF",
  date: "2017-06-06",
  start_time: "12:00:00"
)

Event.create!(
  host_id: 1,
  group_id: 8,
  title: "Get together",
  description: "We're just going to gather.",
  location: "SF",
  date: "2017-06-06",
  start_time: "12:00:00"
)

Event.create!(
  host_id: 1,
  group_id: 9,
  title: "Get together",
  description: "We're just going to gather.",
  location: "SF",
  date: "2017-06-06",
  start_time: "12:00:00"
)

Event.create!(
  host_id: 1,
  group_id: 10,
  title: "Get together",
  description: "We're just going to gather.",
  location: "SF",
  date: "2017-06-06",
  start_time: "12:00:00"
)
