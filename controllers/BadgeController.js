const express = require("express");
const badges = express.Router({ mergeParams: true });
const {
  getAllBadges,
  getBadge,
  createBadge,
  deleteBadge,
  updateBadge,
} = require("../queries/badges");

badges.get("/", async (req, res) => {
  try {
    const allBadges = await getAllBadges();
    res.status(200).json(allBadges);
  } catch (error) {
    res.status(500).json({ error: "Error getting all badges" });
  }
});

badges.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const badge = await getBadge(id);
    if (badge) {
      res.status(200).json(badge);
    } else {
      res.status(404).json({ message: "Badge not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error getting badge" });
  }
});

badges.post("/", async (req, res) => {
  try {
    const newBadge = await createBadge(req.body);

    if (newBadge) {
      return res.status(201).json(newBadge);
    } else {
      return res.status(400).json({ message: "Badge Not Created" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Error creating badge: " + error.message });
  }
});

badges.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBadge = await deleteBadge(id);
    res.status(200).json(deletedBadge);
  } catch (error) {
    res.status(500).json({ error: "Error deleting badge" });
  }
});

badges.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBadge = await updateBadge(id, req.body);
    res.status(200).json(updatedBadge);
  } catch (error) {
    res.status(500).json({ error: "Error updating badge" });
  }
});

module.exports = badges;
