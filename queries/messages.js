const db = require('../db/dbConfig');

const getChatMessages = async (user_id) => {
  try {
    const messages = await db.any('SELECT * FROM messages WHERE user_id = $1', user_id);
    return messages;
  } catch (error) {
    throw new Error(`Error getting chat messages for user with id ${user_id}`);
  }
};

const createChatMessage = async (text, username, timestamp, user_id) => {
  try {
    await db.none('INSERT INTO messages (text, username, timestamp, user_id) VALUES ($1, $2, $3, $4)', [
      text,
      username,
      timestamp,
      user_id
    ]);
  } catch (error) {
    throw new Error('Error creating chat message');
  }
};

module.exports = {
  getChatMessages,
  createChatMessage
};