const express = require('express');
const MessageController = express.Router();
const db = require('../db/dbConfig');

// POST create new message
MessageController.post('/', async (req, res, next) => {
  try {
    const { text, username, user_id } = req.body;
    const newMessage = await db.one(
      'INSERT INTO messages (text, username, user_id) VALUES ($1, $2, $3) RETURNING *',
      [text, username, user_id]
    );
    res.status(201).json(newMessage);
  } catch (error) {
    next(new Error('Error creating message'));
  }
});

// POST create new message reply
MessageController.post('/:id/replies', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { text, username, user_id } = req.body;
    const newReply = await db.one(
      'INSERT INTO messages (text, username, user_id, reply_to) VALUES ($1, $2, $3, $4) RETURNING *',
      [text, username, user_id, id]
    );
    res.status(201).json(newReply);
  } catch (error) {
    next(new Error(`Error creating reply for message with ID ${id}`));
  }
});

// DELETE message by ID
MessageController.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await db.none('DELETE FROM messages WHERE id = $1', id);
    res.status(204).end();
  } catch (error) {
    next(new Error(`Error deleting message with ID ${id}`));
  }
});

// GET messages between two users
MessageController.get('/user/:id1/:id2', async (req, res, next) => {
  try {
    const { id1, id2 } = req.params;
    const messages = await db.any(
      `SELECT * FROM messages WHERE (user_id = $1 AND reply_to = $2) OR (user_id = $2 AND reply_to = $1)`,
      [id1, id2]
    );
    res.status(200).json(messages);
  } catch (error) {
    next(new Error(`Error getting messages between users with IDs ${id1} and ${id2}`));
  }
});

module.exports = MessageController;