const db = require("../db/dbConfig");

const getReply = async (id) => {
  try {
    const oneReply = await db.one("SELECT * FROM forum_replies WHERE id=$1", id);
    return oneReply;
  } catch (error) {
    throw new Error(error);
  }
};

const getAllReplies = async (forumId) => {
  try {
    const allReplies = await db.any("SELECT * FROM forum_replies WHERE forum_id=$1", forumId);
    return allReplies;
  } catch (error) {
    throw new Error(error);
  }
};

const createReply = async (reply) => {
  try {
    const newReply = await db.one("INSERT INTO forum_replies (reply_content, user_id, forum_id) VALUES ($1, $2, $3) RETURNING *", [reply.reply_content, reply.user_id, reply.forum_id]);
    return newReply;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteReply = async (id) => {
  try {
    const deletedReply = await db.one("DELETE FROM forum_replies WHERE id=$1 RETURNING *", id);
    return deletedReply;
  } catch (error) {
    throw new Error(error);
  }
};

const updateReply = async (id, reply) => {
  try {
    const updatedReply = await db.one("UPDATE forum_replies SET reply_content=$1, reply_created_at=$2, WHERE id=$3 RETURNING *", [reply.reply_content, reply.reply_created_at, id]);
    return updatedReply;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getReply,
  getAllReplies,
  createReply,
  updateReply,
  deleteReply
};