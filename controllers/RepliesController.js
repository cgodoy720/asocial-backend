const express = require('express');
const replies = express.Router({ mergeParams: true });
const { getAllReplies, getReply, createReply, deleteReply, updateReply } = require('../queries/replies');

// INDEX
replies.get('/', async (req, res) => {
  const { forumId } = req.params;
  try {
    const allReplies = await getAllReplies(forumId);
    res.status(200).json(allReplies);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// SHOW
replies.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const reply = await getReply(id);
    if (!reply.message) {
      res.status(200).json(reply);
    } else {
      res.status(404).json({ message: 'No reply found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// CREATE
replies.post('/', async (req, res) => {
  try {
    const reply = await createReply(req.body);
    res.status(200).json(reply);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// DELETE
replies.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedReply = await deleteReply(id);
    res.status(200).json(deletedReply);
  } catch (error) {
    res.status(404).json({ error: 'Not Found' });
  }
});

// UPDATE
replies.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedReply = await updateReply(id, req.body);
    res.status(200).json(updatedReply);
  } catch (error) {
    res.status(404).json({ error: 'Not Found' });
  }
});

module.exports = replies;