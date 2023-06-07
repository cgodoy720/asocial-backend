\c asocial_dev;

INSERT INTO users (first_name, last_name, email, password, dob, username, avatar, pronouns, about_me) 
VALUES 
  ('Ashley', 'Brown', 'AshleyBrown@aol.org', '0123456789', '1991-02-18', 'Ashley Brown', 'https://res.cloudinary.com/dtabunojn/image/upload/v1685955845/11_m2r5ep.png', 'she/her', 'I am a cool person looking to build community.'),
  ('Natasha', 'Riddick', 'natashariddick@pursuit.org', 'Natasha05', '1994-05-22', 'Natasha013', 'https://res.cloudinary.com/dtabunojn/image/upload/v1685955845/6_uypxvp.png', 'she/her', 'My mind is in space need help bring it back down to earth.'),
  ('Jamal', 'Partridge', 'jamalpartridge@pursuit.org', 'Akeem123', '1988-09-29', 'Jamal11', 'https://res.cloudinary.com/dtabunojn/image/upload/v1685955845/12_xqzfma.png', 'he/him', 'I am here just hanging out.'),
  ('Triane', 'Peart', 'TrianePeart@pursuit.org', 'HappyBelly02', '1994-05-22', 'JustCallMeAna', 'https://res.cloudinary.com/dtabunojn/image/upload/v1685955845/4_wcue8d.png', 'she/her', 'Lost in space.');

INSERT INTO forums (forum_title, forum_description, forum_posts, user_id, category_id, forum_created_at) VALUES
  ('Parenting Support Group', 'A forum for parents to share their experiences and seek support.', 'Welcome to the Parenting Support Group forum!', 1, 1, NOW()),
  ('Mental Health Discussions', 'Discussing various aspects of mental health and sharing resources.', 'Introduce yourself and join the mental health discussions!', 2, 1, NOW()),
  ('Crafting Corner', 'A place for craft enthusiasts to showcase their projects and exchange ideas.', 'Share your latest craft projects and get inspired by others!', 1, 5, NOW()),
  ('Trigger Warning Discussions', 'A safe space to discuss triggering topics with sensitivity and care.', 'Share your thoughts and experiences in a supportive environment.', 3, 1, NOW()); 

INSERT INTO forum_categories (category_name) VALUES ('Venting and Support'), ('Accessibility'), ('Vibe Check'), ('Family'), ('Hobbies'), ('General Chat');

INSERT INTO forum_topics (topic_name) VALUES ('Parenting'), ('Parents'), ('Siblings'), ('Friends'), ('Mental Health'), ('LGBTQ+'), ('Neurodivergent'), ('Random'), ('Disabilities'), ('General'), ('Home Life'), ('Reflections'), ('Discussions'), ('Games'), ('Sports'), ('Writing'), ('Crafts'), ('Other'), ('School'), ('Work'), ('Trigger Warning');

INSERT INTO category_topics (category_id, topic_id) VALUES
  (1, 1),   -- Venting and Support -> Parenting
  (1, 2),   -- Venting and Support -> Parents
  (1, 3),   -- Venting and Support -> Siblings
  (1, 4),   -- Venting and Support -> Friends
  (1, 5),   -- Venting and Support -> Mental Health
  (2, 5),   -- Accessibility -> Mental Health
  (2, 6),   -- Accessibility -> LGBTQ+
  (2, 7),   -- Accessibility -> Neurodivergent
  (3, 8),   -- Vibe Check -> Random
  (4, 9),   -- Family -> Disabilities
  (5, 10),  -- Hobbies -> General
  (5, 11),  -- Hobbies -> Home Life
  (5, 12),  -- Hobbies -> Reflections
  (6, 13),  -- General Chat -> Discussions
  (6, 14),  -- General Chat -> Games
  (6, 15),  -- General Chat -> Sports
  (6, 16),  -- General Chat -> Writing
  (6, 17),  -- General Chat -> Crafts
  (6, 18),  -- General Chat -> Other
  (6, 19),  -- General Chat -> School
  (6, 20),  -- General Chat -> Work
  (6, 21);  -- General Chat -> Trigger Warning

INSERT INTO forum_replies (user_id, forum_id, reply_content, reply_created_at) 
VALUES (1, 2, 'Thats crazy bro', NOW()), 
(2, 2, 'you dont need that sis', NOW());

INSERT INTO messages (text, timestamp,user_id) VALUES
('Hello','2023-05-14T08:30:00.000Z',1),
('How are you?','2023-05-14T08:31:00.000Z',2),
('I am doing well, thanks. How about you?','2023-05-14T08:32:00.000Z',1),
('I am good too.','2023-05-14T08:33:00.000Z',2),
('That is great!','2023-05-14T08:34:00.000Z',1);

INSERT INTO locations (name, address, latitude, longitude) VALUES
('Location 1', '123 Main St, New York, NY', 40.7128, -74.0060),
('Location 2', '456 Elm St, New York, NY', 40.7127, -74.0059);

INSERT INTO reviews (location_id, rating, comment)
VALUES
  (1, 4.5, 'Great place to visit!'),
  (1, 3.8, 'Decent atmosphere, but service could be better.'),
  (2, 5.0, 'Highly recommended! Friendly staff and delicious food.');