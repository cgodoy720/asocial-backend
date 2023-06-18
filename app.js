const express = require("express");
const cors = require("cors");
const Port = process.env.PORT;
const UsersController = require("./controllers/UserController");
const ForumController = require("./controllers/ForumController");
const JournalController = require("./controllers/JorunalController");
const BadgeController = require("./controllers/BadgeController");
const CategoryController = require("./controllers/CategoryController");
const ForumBadgesController = require("./controllers/ForumBadgesController")

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/users", UsersController);
app.use("/forums", ForumController);
app.use("/journals", JournalController);
app.use("/badges", BadgeController); 
app.use("/categories", CategoryController);
app.use("/forumBadge", ForumBadgesController);

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
