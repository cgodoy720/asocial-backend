DROP DATABASE IF EXISTS asocial_dev;
CREATE DATABASE asocial_dev;
\c asocial_dev;

-- user info
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL, 
  password VARCHAR(255) NOT NULL,
  dob DATE NOT NULL,
  username VARCHAR(60) NOT NULL,
  avatar TEXT,
  pronouns VARCHAR(50),
  about_me TEXT,
  UNIQUE (username)
);

-- messages 
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  text VARCHAR(255) NOT NULL,
  timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  user_id INT REFERENCES users(id) ON DELETE CASCADE
);

-- locations for the map
CREATE TABLE IF NOT EXISTS locations (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  latitude NUMERIC(10, 6) NOT NULL,
  longitude NUMERIC(10, 6) NOT NULL,
  rating NUMERIC(2, 1) DEFAULT 0
);

-- reviews 
CREATE TABLE IF NOT EXISTS reviews (
  id SERIAL PRIMARY KEY,
  location_id INT REFERENCES locations(id) ON DELETE CASCADE,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  rating NUMERIC(2, 1),
  comment TEXT,
  review_created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (user_id, location_id)
);

-- forum blocks 

CREATE TABLE IF NOT EXISTS forum_topics (
  id SERIAL PRIMARY KEY,
  topic_name VARCHAR(255) NOT NULL,
  is_selected BOOLEAN NOT NULL
);

CREATE TABLE IF NOT EXISTS forum_categories (
  id SERIAL PRIMARY KEY,
  category_name VARCHAR(255) NOT NULL,
  isVentingAndSupport BOOLEAN NOT NULL,
  isAccessibility BOOLEAN NOT NULL,
  isVibeCheck BOOLEAN NOT NULL,
  isFamily BOOLEAN NOT NULL,
  isHobbies BOOLEAN NOT NULL,
  isGeneralChat BOOLEAN NOT NULL
);

CREATE TABLE IF NOT EXISTS forums (
  id SERIAL PRIMARY KEY,
  forum_title VARCHAR(200) NOT NULL,
  forum_description TEXT NOT NULL,
  forum_created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  forum_posts TEXT NOT NULL,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  category_id INT REFERENCES forum_categories(id) ON DELETE CASCADE,
  topic_id INT REFERENCES forum_topics(id) ON DELETE CASCA
);

CREATE TABLE IF NOT EXISTS forum_replies (
  id SERIAL PRIMARY KEY,
  reply_content TEXT NOT NULL,
  reply_created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  forum_id INT REFERENCES forums(id) ON DELETE CASCADE
);