const db = require("../db/dbConfig");

const getAllJournals = async () => {
    try {
      const allJournals = await db.any("SELECT * FROM journal");
      return allJournals;
    } catch (error) {
      return error;
    }
  };
  

const getJournal = async (id) => {
  try {
    const oneJournal = await db.one("SELECT * FROM journal WHERE id=$1", id);
    return oneJournal;
  } catch (error) {
    return error;
  }
};

const createJournal = async (journal) => {
  try {
    const newJournal = await db.one(
      "INSERT INTO journal (title, content, mood, date, user_id) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [journal.title, journal.content, journal.mood, journal.date, journal.user_id]
    );
    return newJournal;
  } catch (error) {
    return error;
  }
};

const deleteJournal = async (id) => {
  try {
    const deletedJournal = await db.one('DELETE FROM journal WHERE id=$1 RETURNING *', id);
    return deletedJournal;
  } catch (error) {
    return error;
  }
};

const updateJournal = async (id, journal) => {
  try {
    const updatedJournal = await db.one(
      "UPDATE journal SET title=$1, content=$2, mood=$3, date=$4 WHERE id=$5 RETURNING *",
      [journal.title, journal.content, journal.mood, journal.date, id]
    );
    return updatedJournal;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllJournals, getJournal, createJournal, deleteJournal, updateJournal };
