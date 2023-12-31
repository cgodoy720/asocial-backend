const db = require("../db/dbConfig");

const getAllForums = async () => {
  try {
    const query = "SELECT * FROM forums";
    const allForums = await db.any(query);
    return allForums;
  } catch (error) {
    throw new Error("Error getting all forums");
  }
};

const getForum = async (id) => {
  try {
    const query = "SELECT * FROM forums WHERE id = $1";
    const oneForum = await db.oneOrNone(query, [id]);
    return oneForum;
  } catch (error) {
    throw new Error(`Error getting forum with id ${id}`);
  }
};

const createForum = async (forum) => {
  try {
    const query =
      "INSERT INTO forums (forum_title, forum_description, forum_posts, user_id, category) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    const newForum = await db.one(query, [
      forum.forum_title,
      forum.forum_description,
      forum.forum_posts,
      forum.user_id,
      forum.category,
    ]);
    return newForum;
  } catch (error) {
    console.error("Error creating forum:", error);
    throw new Error("Error creating forum");
  }
};

const deleteForum = async (id) => {
  try {
    const query = "DELETE FROM forums WHERE id = $1 RETURNING *";
    const deletedForum = await db.one(query, [id]);
    return deletedForum;
  } catch (error) {
    throw new Error(`Error deleting forum with id ${id}`);
  }
};

const updateForum = async (id, forum) => {
  try {
    const query =
      "UPDATE forums SET forum_title = $1, forum_description = $2, forum_posts = $3, user_id = $4, category = $5, topic_id = $6 WHERE id = $7 RETURNING *";
    const updatedForum = await db.one(query, [
      forum.forum_title,
      forum.forum_description,
      forum.forum_posts,
      forum.user_id,
      forum.category,
      forum.topic_id,
      id
    ]);
    return updatedForum;
  } catch (error) {
    throw new Error(`Error updating forum with id ${id}`);
  }
};

module.exports = {
  getAllForums,
  getForum,
  createForum,
  deleteForum,
  updateForum,
};