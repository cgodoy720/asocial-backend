const express = require("express");
const users = express.Router({ mergeParams: true });
const {
  getAllUsers,
  getUser,
  createUser,
  getUserLogin,
  deleteUser,
  updateUser,
} = require("../queries/user");

users.get("/", async (req, res) => {
  try {
    const allUsers = await getAllUsers();

    if (allUsers) {
      res.status(200).json(allUsers);
    } else {
      res.status(500).json({ error: "Error getting all users" });
    }
  } catch (error) {}
});

users.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUser(id);
    if (!user.message) {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ error: "Error getting user" });
  }
});

users.post("/", async (req, res) => {
  try {
    const newUser = await createUser(req.body);

    if (newUser) {
      return res.status(201).json(newUser);
    } else {
      return res.status(400).json({ message: "User Not Created" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Error creating user: " + error.message });
  }
});

users.post("/login", async (req, res) => {
  try {
    const aUser = await getUserLogin(req.body);
    if (aUser) {
      return res.status(201).json(aUser);
    } else {
      return res.status(400).json({ message: "User Not Found!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error retrieving user: " + error.message });
  }
});

users.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await deleteUser(id);
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: "Error deleting user" });
  }
});

users.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await updateUser(id, req.body);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Error updating user" });
  }
});

module.exports = users;