const express = require("express");
const forum = express();
const {
  getAllForums,
  getForum,
  createForum,
  deleteForum,
  updateForum,
} = require("../queries/forums");

const RepliesController = require('./RepliesController')
forum.use('/:forumId/replies', RepliesController)

forum.get("/", async (req, res) => {
  try {
    const allForums = await getAllForums();
    res.status(200).json(allForums);
  } catch (error) {
    console.error("Error getting all forums:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


forum.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const forumData = await getForum(id);
    if (forumData) {
      res.status(200).json(forumData);
    } else {
      res.status(404).json({ error: "Forum not found" });
    }
  } catch (error) {
    console.error(`Error getting forum with id ${id}:`, error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


forum.post("/", async (req, res) => {
  try {
    const newForum = await createForum(req.body);
    res.status(201).json(newForum);
  } catch (error) {
    console.error("Error creating forum:", error);
    res.status(500).json({ error: "Error creating forum" });
  }
});


forum.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedForum = await deleteForum(id);
    res.status(200).json(deletedForum);
  } catch (error) {
    console.error(`Error deleting forum with id ${id}:`, error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


forum.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedForum = await updateForum(id, req.body);
    res.status(200).json(updatedForum);
  } catch (error) {
    console.error(`Error updating forum with id ${id}:`, error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = forum;
