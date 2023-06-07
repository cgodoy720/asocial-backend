const express = require("express");
const cors = require("cors");
const Port = process.env.PORT ;
const UsersController = require("./controllers/UserController");
const ForumController = require("./controllers/ForumController");
const MapController = require("./controllers/MapController");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/users", UsersController);
app.use("/forums", ForumController);
app.use("/maps", MapController);

// Routes
app.get("/", (_, res) => {
  res.send("Welcome to A-SOCIAL");
});

// Start the server
app.listen(Port, () => {
  console.log(`Server is listening on port ${Port}`);
});

// EXPORT
module.exports = app;