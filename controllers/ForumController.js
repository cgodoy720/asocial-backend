const express = require("express");
const forum = express();
const {
  getAllForums,
  getForum,
  createForum,
  deleteForum,
  updateForum,
} = require("../queries/forums");

// Get all forums
forum.get("/", async (req, res) => {
  try {
    const allForums = await getAllForums();
    res.status(200).json(allForums);
  } catch (error) {
    console.error("Error getting all forums:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get a specific forum
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

// Create a new forum
forum.post("/", async (req, res) => {
  try {
    const newForum = await createForum(req.body);
    res.status(201).json(newForum);
  } catch (error) {
    console.error("Error creating forum:", error);
    res.status(500).json({ error: "Error creating forum" });
  }
});

// Create a new forum
// forum.post("/", async (req, res) => {
//   try {
//     const { forum_title, forum_description, forum_created_at, forum_posts, user_id, category_id } = req.body;
//     const newForum = await createForum({ 
//       title: forum_title,
//       description: forum_description,
//       created_at: forum_created_at,
//       posts: forum_posts,
//       user_id,
//       category_id
//     });
//     res.status(201).json(newForum);
//   } catch (error) {
//     console.error("Error creating forum:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });


// Delete a forum
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

// Update a forum
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
