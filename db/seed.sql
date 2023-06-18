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

INSERT INTO badges (badge_type) VALUES
  ('Parenting'),
  ('Parents'),
  ('Siblings'),
  ('Friends'),
  ('Mental Health'),
  ('LGBTQ+'),
  ('Neurodivergent'),
  ('Random'),
  ('Disabilities'),
  ('General'),
  ('Home Life'),
  ('Reflections'),
  ('Discussions'),
  ('Games'),
  ('Sports'),
  ('Writing'),
  ('Crafts'),
  ('Other'),
  ('School'),
  ('Work'),
  ('Trigger Warning');

INSERT INTO categories (category_name) VALUES
  ('Venting and Support'),
  ('Accessibility'),
  ('Vibe Check'),
  ('Family'),
  ('Hobbies'),
  ('General Chat');

INSERT INTO forums (category_id, user_id, forum_title, forum_description, forum_posts)
VALUES
  (1, 1, 'Forum about Mental Health', 'Discussion about mental health and well-being', 'Posts about mental health'),
  (1, 2, 'Support for Anxiety', 'Support group for people dealing with anxiety', 'Share your experiences and find support'),
  (2, 3, 'Accessibility in Mental Health', 'Improving accessibility in mental health services', 'Discuss ways to make mental health support more accessible'),
  (5, 4, 'Hobbies for Relaxation', 'Sharing hobbies and activities that promote relaxation', 'Discover new hobbies for stress relief'),
  (1, 1, 'Coping with Grief and Loss', 'Support group for coping with grief and loss', 'Share your journey and find solace'),
  (3, 2, 'Positive Vibes', 'Spreading positivity and uplifting messages', 'Share inspiring stories and motivational content'),
  (4, 3, 'Family Support', 'Support group for families dealing with mental health challenges', 'Discuss challenges and share resources'),
  (6, 4, 'General Chat', 'Open discussion about various topics', 'Engage in casual conversations');

INSERT INTO forum_badges (forum_id, badge_id) VALUES
  (1, 1),
  (1, 2),
  (2, 3),
  (3, 4),
  (4, 5);

INSERT INTO forum_replies (reply_content, reply_created_at, user_id, forum_id) VALUES
  ('Reply 1 for Forum 1', CURRENT_TIMESTAMP, 1, 1),
  ('Reply 2 for Forum 1', CURRENT_TIMESTAMP, 2, 1),
  ('Reply 1 for Forum 2', CURRENT_TIMESTAMP, 2, 2),
  ('Reply 1 for Forum 3', CURRENT_TIMESTAMP, 3, 3);

