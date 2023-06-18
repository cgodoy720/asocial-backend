const express = require("express");
const forumBadge = express.Router();
const {
  addBadgeToForum,
  removeBadgeFromForum,
} = require("../queries/forumBadges");

forumBadge.post("/", async (req, res) => {
  const { forum_id, badge_id } = req.body;
  try {
    await addBadgeToForum(forum_id, badge_id);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: "Error adding badge to forum" });
  }
});

forumBadge.delete("/:badgeId", async (req, res) => {
  const { forumId, badgeId } = req.params;
  try {
    await removeBadgeFromForum(forumId, badgeId);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: "Error removing badge from forum" });
  }
});

module.exports = forumBadge;

