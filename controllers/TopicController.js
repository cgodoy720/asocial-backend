const express = require("express");
const topics = express.Router({ mergeParams: true });
const {
  getAllTopics,
  getTopic,
  createTopic,
  deleteTopic,
} = require("../queries/topics");

topics.get("/", async (_, res) => {
  try {
    const allTopics = await getAllTopics();

    if (allTopics) {
      res.status(200).json(allTopics);
    } else {
      res.status(500).json({ error: "Error getting all topics" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error getting all topics" });
  }
});

topics.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const topic = await getTopic(id);
    if (topic) {
      res.status(200).json(topic);
    } else {
      res.status(404).json({ message: "Topic not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error getting topic" });
  }
});

topics.post("/", async (req, res) => {
  try {
    const newTopic = await createTopic(req.body);
    if (newTopic) {
      res.status(201).json(newTopic);
    } else {
      res.status(400).json({ message: "Topic not created" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error creating topic" });
  }
});

topics.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTopic = await deleteTopic(id);
    if (deletedTopic) {
      res.status(200).json(deletedTopic);
    } else {
      res.status(404).json({ message: "Cannot delete topic" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error deleting topic" });
  }
});

module.exports = topics;
