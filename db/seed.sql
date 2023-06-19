\c asocial_dev;

INSERT INTO users (first_name, last_name, email, password, dob, username, avatar, pronouns, about_me) 
VALUES 
  ('Rae', 'Charles', 'HeyItsRate@aol.org', '0123456789', '1991-02-18', 'YesItsMyRealName', 'https://res.cloudinary.com/dtabunojn/image/upload/v1685955845/11_m2r5ep.png', 'he/him', 'I am a cool person looking to build community.'),
  ('Natasha', 'Riddick', 'natashariddick@pursuit.org', 'Natasha05', '1994-05-22', 'Natasha013', 'https://res.cloudinary.com/dtabunojn/image/upload/v1685955845/6_uypxvp.png', 'she/her', 'My mind is in space need help bring it back down to earth.'),
  ('Jamal', 'Partridge', 'jamalpartridge@pursuit.org', 'Akeem123', '1988-09-29', 'Jamal11', 'https://res.cloudinary.com/dtabunojn/image/upload/v1685955845/12_xqzfma.png', 'he/him', 'I am here just hanging out.'),
  ('Triane', 'Peart', 'TrianePeart@pursuit.org', 'HappyBelly02', '1994-05-22', 'JustCallMeAna', 'https://res.cloudinary.com/dtabunojn/image/upload/v1685955845/4_wcue8d.png', 'she/her', 'Lost in space.'),
  ('Michael', 'Wilson', 'mwilson@msn.no', 'stride87', '1987-11-28', 'mwilson', 'no-photo', 'he/him', 'Fitness enthusiast and marathon runner.'),
  ('Sarai', 'Davis', 'sdavis@yahoo.gg', 'secure123', '1995-07-14', 'sdavis', 'no-photo', 'she/her', 'Passionate about environmental sustainability and eco-friendly living.'),
  ('Jennifer', 'Lee', 'jenniferlee@parks.com', 'sumChords08', '1991-08-17', 'JLee23', 'no-photo', 'she/her', 'Music lover and aspiring guitarist.'),
  ('Sophia', 'Martin', 'sophiamartin@compuserve.net', 'BraisedSnapper14', '1994-02-14', 'sophiamartin', 'no-photo', 'she/her', 'Passionate about cooking and experimenting with new recipes.'),
  ('William', 'Brown', 'williambrown@verizon.com', 'Jehuty23', '1991-10-23', 'williebrown91', 'no-photo', 'he/him', 'Tech enthusiast and software engineer by profession.'),
  ('James', 'Hernandez', 'jameshernandez@myspace.com', 'outsider11', '1989-11-02', 'jameshernandez', 'no-photo', 'he/him', 'Nature is my sanctuary.');

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
  ('Family'),
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
  ('Personal Life'),
  ('Hobbies'),
  ('General Chat');

INSERT INTO forums (category_id, user_id, forum_title, forum_description, forum_posts)
VALUES
  (1, 1, 'Forum about Mental Health', 'Discussion about mental health and well-being', 'How do you guys deal with stress? Personally I like to meditate'),
  (10, 2, 'Support for Anxiety', 'Support group for people dealing with anxiety', 'Share your experiences and find support'),
  (2, 3, 'Accessibility in Mental Health', 'Improving accessibility in mental health services', 'Discuss ways to make mental health support more accessible'),
  (5, 4, 'Hobbies for Relaxation', 'Sharing hobbies and activities that promote relaxation', 'Discover new hobbies for stress relief'),
  (1, 1, 'Coping with Grief and Loss', 'Support group for coping with grief and loss', 'Share your journey and find solace'),
  (3, 2, 'Positive Vibes', 'Spreading positivity and uplifting messages', 'Share inspiring stories and motivational content'),
  (4, 3, 'Family Support', 'Support group for families dealing with mental health challenges', 'Discuss challenges and share resources'),
  (5, 2, 'Food discussion,' 'Sharing Recipes and discussing topics', 'What is the best dish you ever made?')
  (6, 4, 'General Chat', 'Open discussion about various topics', 'Engage in casual conversations');

INSERT INTO forum_badges (forum_id, badge_id) VALUES
  (1, 1),
  (1, 2),
  (2, 3),
  (3, 4),
  (4, 5);

INSERT INTO forum_replies (reply_content, reply_created_at, user_id, forum_id) VALUES
    ('I eat.', CURRENT_TIMESTAMP, 2, 1),
    ('I have a secret dance routine that I perform in my room. Its my stress-busting groove!', CURRENT_TIMESTAMP, 3, 1),
    ('I transform stress into art. I splatter paint on a canvas and let my emotions create a beautiful mess.', CURRENT_TIMESTAMP, 4, 1),
    ('I find solace in baking elaborate desserts. The smell of freshly baked goods melts my stress away.', CURRENT_TIMESTAMP, 5, 1),
    ('I tackle stress head-on by tackling a challenging crossword puzzle. The mental focus helps me forget about everything else.', CURRENT_TIMESTAMP, 6, 1),
    ('When stress strikes, I gather my thoughts and head to a peaceful spot in nature, where I practice meditation and deep breathing exercises.', CURRENT_TIMESTAMP, 7, 1),
    ('I find solace in baking elaborate desserts. The smell of freshly baked goods melts my stress away.', CURRENT_TIMESTAMP, 8, 1),
    ('I rely on the power of laughter. I watch comedy shows, tell jokes, and tickle myself silly!', CURRENT_TIMESTAMP, 9, 1),
    ('Whenever stress hits, I escape to a virtual reality world and slay dragons. Its my ultimate stress relief!', CURRENT_TIMESTAMP, 10, 1),
    ('I like to jog.', CURRENT_TIMESTAMP, 1, 1),
    ('Anxiety can be tough, but remember that you are not alone in this.', CURRENT_TIMESTAMP, 2, 2),
    ('Improving accessibility in mental health services is essential for a more inclusive society.', CURRENT_TIMESTAMP, 3, 3),
    ('Hobbies like painting and gardening have been great for my relaxation.', CURRENT_TIMESTAMP, 4, 4),
    ('Coping with grief is a journey, and finding support is important.', CURRENT_TIMESTAMP, 5, 5),
    ('Spreading positivity is a wonderful way to make a difference in someone''s day.', CURRENT_TIMESTAMP, 6, 6),
    ('Supporting families dealing with mental health challenges is crucial for their well-being.', CURRENT_TIMESTAMP, 7, 7),
    ('Its great to have a place for casual conversations and general chat.', CURRENT_TIMESTAMP, 8, 8),
    ('Art and design have always inspired me to express myself creatively.', CURRENT_TIMESTAMP, 9, 9),
    ('GoldenEye 007 was definitely one of my favorite games too!', CURRENT_TIMESTAMP, 10, 10),
    ('Cooking has been a passion of mine, and I love trying new recipes!', CURRENT_TIMESTAMP, 1, 11),
    ('Mental health is something we should prioritize in our lives.', CURRENT_TIMESTAMP, 2, 1),
    ('I have struggled with anxiety, and finding support made a huge difference.', CURRENT_TIMESTAMP, 3, 2),
    ('Accessibility in mental health services can help more people get the support they need.', CURRENT_TIMESTAMP, 4, 3),
    ('Hobbies like reading and painting help me relax and destress.', CURRENT_TIMESTAMP, 5, 4),
    ('Dealing with grief is tough, but finding a support system is crucial.', CURRENT_TIMESTAMP, 6, 5),
    ('Spreading positivity can have a ripple effect on people''s lives.', CURRENT_TIMESTAMP, 7, 6),
    ('Family support is so important in navigating mental health challenges.', CURRENT_TIMESTAMP, 8, 7),
    ('General chat forums provide a space for diverse conversations.', CURRENT_TIMESTAMP, 9, 8),
    ('Art allows us to express ourselves and find inspiration.', CURRENT_TIMESTAMP, 10, 9),
    ('Gaming has been a big part of my life, and GoldenEye 007 was an all-time favorite!', CURRENT_TIMESTAMP, 1, 10),
    ('Sharing recipes and culinary experiences is always exciting!', CURRENT_TIMESTAMP, 2, 11);
