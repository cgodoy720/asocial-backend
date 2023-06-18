const db = require("../db/dbConfig");

const getAllBadges = async () => {
    try {
      const allBadges = await db.any("SELECT * FROM badges");
      return allBadges;
    } catch (error) {
      return error;
    }
  };
  
  const getBadge = async (badge_id) => {
    try {
      const oneBadge = await db.one("SELECT * FROM badges WHERE badge_id=$1", badge_id);
      return oneBadge;
    } catch (error) {
      return error;
    }
  };
  
  const createBadge = async (badge) => {
    try {
      const newBadge = await db.one(
        "INSERT INTO badges (badge_id, forum_id, badge_type, label) VALUES($1, $2, $3, $4) RETURNING *",
        [badge.badge_id, badge.forum_id, badge.badge_type, badge.label]
      );
      return newBadge;
    } catch (error) {
      return error;
    }
  };
  
  const deleteBadge = async (badge_id) => {
    try {
      const deletedBadge = await db.one("DELETE FROM badges WHERE badge_id=$1 RETURNING *", badge_id);
      return deletedBadge;
    } catch (error) {
      return error;
    }
  };
  
  const updateBadge = async (badge_id, badge) => {
    try {
      const updatedBadge = await db.one(
        "UPDATE badges SET forum_id=$1, badge_type=$2, label=$3 WHERE badge_id=$4 RETURNING *",
        [badge.forum_id, badge.badge_type, badge.label, badge_id]
      );
      return updatedBadge;
    } catch (error) {
      return error;
    }
  };
  
  module.exports = { getAllBadges, getBadge, createBadge, deleteBadge, updateBadge };
  