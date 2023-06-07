const db = require('../db/dbConfig');

// Getting all topics
const getAllTopics = async () => {
  try {
    const allTopics = await db.any("SELECT * FROM forum_topics");
    return allTopics;
  } catch (err) {
    throw new Error('Error: Topics Not Found.');
  }
};

// Getting topic by id
const getTopic = async (id) => {
  try {
    const topic = await db.one("SELECT * FROM forum_topics WHERE id=$1", id);
    return topic;
  } catch (err) {
    throw new Error('Error: Topic Not Found.');
  }
};

// Creating topics
const createTopic = async (topic) => {
  try {
    const newTopic = await db.one("INSERT INTO forum_topics (topic_name) VALUES($1) RETURNING *", [topic.topic_name]);
    return newTopic;
  } catch (error) {
    throw new Error('Error: Topic Creation Failed.');
  }
};

// Deleting topics
const deleteTopic = async (id) => {
  try {
    const deletedTopic = await db.one("DELETE FROM forum_topics WHERE id=$1 RETURNING *", id);
    return deletedTopic;
  } catch (error) {
    throw new Error('Error: Topic Deletion Failed.');
  }
};

module.exports = { getTopic, getAllTopics, createTopic, deleteTopic };