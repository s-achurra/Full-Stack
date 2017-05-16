# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
about           | text      |
image_link      | string    |

## groups
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
owner_id    | integer   | not null, foreign key (references users), indexed

## events
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
host_id     | integer   | not null, foreign key (references users), indexed
group_id    | integer   | not null, foreign key (references groups), indexed
title       | string    | not null
description | text      | not null
location    | text      | not null
date        | text      | not null
start_time  | text      | not null
end_time    | text      | not null
image_link  | text      |

## rsvps
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
event_id    | integer   | not null, foreign key (references events), indexed

## follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
group_id    | integer   | not null, foreign key (references group), indexed
