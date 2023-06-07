const db = require("../db/dbConfig");

// Get all topics
const getAllTopics = async () => {
  try {
    const query = "SELECT * FROM forum_topics";
    const allTopics = await db.any(query);
    return allTopics;
  } catch (error) {
    throw new Error("Error getting all topics");
  }
};

// Get a specific topic
const getTopic = async (id) => {
  try {
    const query = "SELECT * FROM forum_topics WHERE id = $1";
    const oneTopic = await db.oneOrNone(query, [id]);
    return oneTopic;
  } catch (error) {
    throw new Error(`Error getting topic with id ${id}`);
  }
};

// Create a new topic
const createTopic = async (topic) => {
  try {
    const query =
      "INSERT INTO forum_topics (topic_name, is_selected) VALUES ($1, $2) RETURNING *";
    const newTopic = await db.one(query, [
      topic.topic_name,
      topic.is_selected
    ]);
    return newTopic;
  } catch (error) {
    throw new Error("Error creating topic");
  }
};

// Delete a topic
const deleteTopic = async (id) => {
  try {
    const query = "DELETE FROM forum_topics WHERE id = $1 RETURNING *";
    const deletedTopic = await db.one(query, [id]);
    return deletedTopic;
  } catch (error) {
    throw new Error(`Error deleting topic with id ${id}`);
  }
};

module.exports = {
  getAllTopics,
  getTopic,
  createTopic,
  deleteTopic
};
