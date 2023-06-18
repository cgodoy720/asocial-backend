const express = require("express");
const journals = express.Router();
const {
  getAllJournals,
  getJournal,
  createJournal,
  deleteJournal,
  updateJournal
} = require("../queries/jorunal");

journals.get("/", async (req, res) => {
  const allJournals = await getAllJournals();
  if (allJournals) {
    res.status(200).json(allJournals);
  } else {
    res.status(500).json({ error: "Server error" });
  }
});

journals.get("/:id", async (req, res) => {
  const { id } = req.params;
  const journal = await getJournal(id);
  console.log("journal", journal);
  if (!journal.message) {
    res.status(200).json(journal);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

journals.post("/", async (req, res) => {
  try {
    const journal = await createJournal(req.body);
    res.status(200).json(journal);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

journals.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedJournal = await deleteJournal(id);
    res.status(200).json(deletedJournal);
  } catch (error) {
    res.status(404).json({ error: "ID not found" });
  }
});

journals.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedJournal = await updateJournal(id, req.body);
    res.status(200).json(updatedJournal);
  } catch (error) {
    res.status(404).json({ error: "Journal not found" });
  }
});

module.exports = journals;

  