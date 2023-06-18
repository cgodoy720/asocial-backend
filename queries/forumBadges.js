const db = require("../db/dbConfig");

const addBadgeToForum = async (forumId, badgeId) => {
  try {
    await db.none(
      "INSERT INTO forum_badges (forum_id, badge_id) VALUES ($1, $2)",
      [forumId, badgeId]
    );
  } catch (error) {
    throw new Error("Error adding badge to forum: " + error.message);
  }
};

const removeBadgeFromForum = async (forumId, badgeId) => {
  try {
    await db.none(
      "DELETE FROM forum_badges WHERE forum_id = $1 AND badge_id = $2",
      [forumId, badgeId]
    );
  } catch (error) {
    throw new Error("Error removing badge from forum: " + error.message);
  }
};

module.exports = {
  addBadgeToForum,
  removeBadgeFromForum,
};

