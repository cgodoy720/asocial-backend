\c asocial_dev;

INSERT INTO users (first_name, last_name, email, password, dob, username, avatar, pronouns, about_me) 
VALUES 
  ('Ashley', 'Brown', 'AshleyBrown@aol.org', '0123456789', '1991-02-18', 'Ashley Brown', 'https://res.cloudinary.com/dtabunojn/image/upload/v1685955845/11_m2r5ep.png', 'she/her', 'I am a cool person looking to build community.'),
  ('Natasha', 'Riddick', 'natashariddick@pursuit.org', 'Natasha05', '1994-05-22', 'Natasha013', 'https://res.cloudinary.com/dtabunojn/image/upload/v1685955845/6_uypxvp.png', 'she/her', 'My mind is in space need help bring it back down to earth.'),
  ('Jamal', 'Partridge', 'jamalpartridge@pursuit.org', 'Akeem123', '1988-09-29', 'Jamal11', 'https://res.cloudinary.com/dtabunojn/image/upload/v1685955845/12_xqzfma.png', 'he/him', 'I am here just hanging out.'),
  ('Triane', 'Peart', 'TrianePeart@pursuit.org', 'HappyBelly02', '1994-05-22', 'JustCallMeAna', 'https://res.cloudinary.com/dtabunojn/image/upload/v1685955845/4_wcue8d.png', 'she/her', 'Lost in space.');

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

INSERT INTO forum_topics (topic_name, is_selected) VALUES
  ('Parenting', false),
  ('Parents', false),
  ('Siblings', false),
  ('Friends', false),
  ('Mental Health', false),
  ('LGBTQ+', false),
  ('Neurodivergent', false),
  ('Random', false),
  ('Disabilities', false),
  ('General', false),
  ('Home Life', false),
  ('Reflections', false),
  ('Discussions', false),
  ('Games', false),
  ('Sports', false),
  ('Writing', false),
  ('Crafts', false),
  ('Other', false),
  ('School', false),
  ('Work', false),
  ('Trigger Warning', false);
-- Insert forum categories
INSERT INTO forum_categories (category_name, isVentingAndSupport, isAccessibility, isVibeCheck, isFamily, isHobbies, isGeneralChat) VALUES
  ('Venting and Support', true, false, false, false, false, false),
  ('Accessibility', false, true, false, false, false, false),
  ('Vibe Check', false, false, true, false, false, false),
  ('Family', false, false, false, true, false, false),
  ('Hobbies', false, false, false, false, true, false),
  ('General Chat', false, false, false, false, false, true);

-- Insert forums
INSERT INTO forums (forum_title, forum_description, forum_posts, user_id, category_id, topic_id) VALUES
  ('Just Doing Stuff', 'Im unsure', 'Forum 1 Posts', 1, 1, 1),
  ('Testing This Out', 'This thing', 'Forum 2 Posts', 2, 2, 2),
  ('Blah blah blah', 'This test', 'Forum 3 Posts', 3, 3, 3);

-- Insert forum replies
INSERT INTO forum_replies (reply_content, reply_created_at, user_id, forum_id) VALUES
  ('Reply 1 for Forum 1', CURRENT_TIMESTAMP, 1, 1),
  ('Reply 2 for Forum 1', CURRENT_TIMESTAMP, 2, 1),
  ('Reply 1 for Forum 2', CURRENT_TIMESTAMP, 2, 2),
  ('Reply 1 for Forum 3', CURRENT_TIMESTAMP, 3, 3);