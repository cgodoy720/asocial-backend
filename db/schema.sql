DROP DATABASE IF EXISTS asocial_dev;
CREATE DATABASE asocial_dev;
\c asocial_dev;

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

CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  category_name VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS badges (
  id SERIAL PRIMARY KEY,
  badge_type VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS forums (
  id SERIAL PRIMARY KEY,
  category_id INT,
  user_id INT,
  forum_title VARCHAR(200) NOT NULL,
  forum_description TEXT NOT NULL,
  forum_created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  forum_posts TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE IF NOT EXISTS forum_badges (
  forum_id INT,
  badge_id INT,
  FOREIGN KEY (forum_id) REFERENCES forums(id),
  FOREIGN KEY (badge_id) REFERENCES badges(id),
  PRIMARY KEY (forum_id, badge_id)
);

CREATE TABLE IF NOT EXISTS forum_replies (
  id SERIAL PRIMARY KEY,
  forum_id INT,
  user_id INT,
  reply_content TEXT NOT NULL,
  reply_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (forum_id) REFERENCES forums(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS journal (
  id SERIAL PRIMARY KEY,
  user_id INT,
  title VARCHAR(255),
  content TEXT,
  mood VARCHAR(255),
  date DATE,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
