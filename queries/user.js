const db = require("../db/dbConfig");

const getAllUsers = async () => {
  try {
    const query = "SELECT * FROM users";
    const allUsers = await db.any(query);
    return allUsers;
  } catch (error) {
    throw new Error("Error getting all users");
  }
};

const getUser = async (id) => {
  try {
    const query = "SELECT * FROM users WHERE id = $1";
    const oneUser = await db.one(query, id);
    return oneUser;
  } catch (error) {
    throw new Error(`Error getting user with id ${id}`);
  }
};
 
const createUser = async (user) => {
  try {
    const query =
      "INSERT INTO users (first_name, last_name, email, password, username, dob) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
    const newUser = await db.one(query, [
      user.first_name,
      user.last_name,
      user.email,
      user.password,
      user.username,
      user.dob,
    ]);

    const {
      id,
      first_name,
      last_name,
      email,
      username,
      dob,
      pronouns,
      about_me,
      avatar,
    } = newUser;

    const userInfoFrontend = {
      id,
      first_name,
      last_name,
      email,
      username,
      dob,
      pronouns,
      about_me,
      avatar,
    };
    return userInfoFrontend;
  } catch (error) {
    throw new Error("Error creating user: " + error.message);
  }
};

const getUserLogin = async (login) => {
  try {
    const query = "SELECT * FROM users WHERE email=$1 AND password=$2";
    const aUser = await db.oneOrNone(query, [login.email, login.password]);
  
    if (aUser) {
      const {
        id,
        first_name,
        last_name,
        email,
        username,
        dob,
        pronouns,
        about_me,
        avatar,
      } = aUser;

    
      const loginUser = {
        id,
        first_name,
        last_name,
        email,
        username,
        dob,
        pronouns,
        about_me,
        avatar,
      };
      return loginUser;
    } else {
      return null;
    }
  } catch (error) {
    throw new Error(`Error retrieving user: ${error.message}`);
  }
};


const deleteUser = async (id) => {
  try {
    const query = "DELETE FROM users WHERE id = $1 RETURNING *";
    const deletedUser = await db.one(query, id);
    return deletedUser;
  } catch (error) {
    throw new Error(`Error deleting user with id ${id}`);
  }
};

const updateUser = async (id, user) => {
  try {
    const query =
      "UPDATE users SET first_name=$1, last_name=$2, email=$3, password=$4, dob=$5, username=$6, pronouns=$7, about_me=$8, avatar=$9 WHERE id = $10 RETURNING *";
    const updatedUser = await db.one(query, [
      user.first_name,
      user.last_name,
      user.email,
      user.password,
      user.dob,
      user.username,
      user.pronouns,
      user.about_me,
      user.avatar,
      id,
    ]);
    return updatedUser;
  } catch (error) {
    throw new Error(`Error updating user with id ${id}`);
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  getUserLogin,
  deleteUser,
  updateUser,
};