\c asocial_dev;

INSERT INTO users (first_name, last_name, email, password, dob, username, avatar, pronouns, about_me) 
VALUES 
  ('Ashley', 'Brown', 'AshleyBrown@aol.org', '0123456789', '1991-02-18', 'Ashley Brown', 'https://res.cloudinary.com/dtabunojn/image/upload/v1685955845/11_m2r5ep.png', 'she/her', 'I am a cool person looking to build community.'),
  ('Natasha', 'Riddick', 'natashariddick@pursuit.org', 'Natasha05', '1994-05-22', 'Natasha013', 'https://res.cloudinary.com/dtabunojn/image/upload/v1685955845/6_uypxvp.png', 'she/her', 'My mind is in space need help bring it back down to earth.'),
  ('Jamal', 'Partridge', 'jamalpartridge@pursuit.org', 'Akeem123', '1988-09-29', 'Jamal11', 'https://res.cloudinary.com/dtabunojn/image/upload/v1685955845/12_xqzfma.png', 'he/him', 'I am here just hanging out.'),
  ('Triane', 'Peart', 'TrianePeart@pursuit.org', 'HappyBelly02', '1994-05-22', 'JustCallMeAna', 'https://res.cloudinary.com/dtabunojn/image/upload/v1685955845/4_wcue8d.png', 'she/her', 'Lost in space.');

INSERT INTO journal (user_id, title, content, mood, date)
VALUES
  (1, 'First Entry', 'This is my first journal entry.', 'Happy', '2022-01-01'),
  (1, 'Second Entry', 'Feeling a bit tired today.', 'Tired', '2022-01-02'),
  (2, 'Reflections', 'Reflecting on the day and its events.', 'Thoughtful', '2022-01-01'),
  (2, 'New Beginnings', 'Excited about starting a new project.', 'Excited', '2022-01-02'),
  (3, 'Morning Thoughts', 'Woke up feeling refreshed and ready for the day.', 'Energetic', '2022-01-01'),
  (3, 'Challenges Ahead', 'Preparing myself for upcoming challenges.', 'Determined', '2022-01-02'),
  (4, 'Self-Reflection', 'Taking time to reflect on personal growth.', 'Content', '2022-01-01'),
  (4, 'Gratitude Journal', 'Listing things I am grateful for today.', 'Grateful', '2022-01-02');

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

INSERT INTO forums (forum_title, forum_description, forum_posts, user_id, category)
VALUES
  ('Forum about Mental Health', 'Discussion about mental health and well-being', 'Posts about mental health', 1, 'Venting and Support'),
  ('Support for Anxiety', 'Support group for people dealing with anxiety', 'Share your experiences and find support', 2, 'Venting and Support'),
  ('Accessibility in Mental Health', 'Improving accessibility in mental health services', 'Discuss ways to make mental health support more accessible', 3, 'Accessibility'),
  ('Hobbies for Relaxation', 'Sharing hobbies and activities that promote relaxation', 'Discover new hobbies for stress relief', 4, 'Hobbies'),
  ('Coping with Grief and Loss', 'Support group for coping with grief and loss', 'Share your journey and find solace', 1, 'Venting and Support'),
  ('Positive Vibes', 'Spreading positivity and uplifting messages', 'Share inspiring stories and motivational content', 2, 'Vibe Check'),
  ('Family Support', 'Support group for families dealing with mental health challenges', 'Discuss challenges and share resources', 3, 'Family'),
  ('General Chat', 'Open discussion about various topics', 'Engage in casual conversations', 4, 'General Chat');

-- Insert forum replies
INSERT INTO forum_replies (reply_content, reply_created_at, user_id, forum_id) VALUES
  ('Reply 1 for Forum 1', CURRENT_TIMESTAMP, 1, 1),
  ('Reply 2 for Forum 1', CURRENT_TIMESTAMP, 2, 1),
  ('Reply 1 for Forum 2', CURRENT_TIMESTAMP, 2, 2),
  ('Reply 1 for Forum 3', CURRENT_TIMESTAMP, 3, 3);