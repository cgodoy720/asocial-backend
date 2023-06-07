const express = require('express');
const topics = express.Router();
const {
  getAllTopics,
  getTopic,
  createTopic,
  deleteTopic
} = require('../queries/TopicController');

// SHOW
topics.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const topic = await getTopic(id);
    if (topic) {
      res.status(200).json(topic);
    } else {
      res.status(404).json({ message: 'Topic not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// INDEX
topics.get('/', async (_, res) => {
  try {
    const allTopics = await getAllTopics();
    if (allTopics) {
      res.status(200).json(allTopics);
    } else {
      res.status(404).json({ message: 'No topics found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// CREATE
topics.post('/', async (req, res) => {
  try {
    const newTopic = await createTopic(req.body);
    res.status(200).json(newTopic);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// DELETE
topics.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTopic = await deleteTopic(id);
    if (deletedTopic) {
      res.status(200).json(deletedTopic);
    } else {
      res.status(404).json({ message: 'Cannot delete topic' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = topics;
