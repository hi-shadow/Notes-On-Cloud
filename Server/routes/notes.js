const express = require("express");
const router = express.Router();
const FetchUser = require("../middleware/FetchUser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

router.get("/allnotes", FetchUser, async (req, res) => {
  try {
    const notes = await Notes.findOne({ userId: req.user.id });
    res.status(200).json(notes);
  } catch (error) {
    return res.status(500).send("Internal Server Error : " + error);
  }
});

router.post(
  "/addnote",
  FetchUser,
  [
    body("title", "Title Should at least Minimum 5 Charactors").isLength({
      min: 5,
    }),
    body(
      "description",
      "Description Should at least Minimum 5 Charactors"
    ).isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res.status(400).json({ Error: error.array() });
      }
      const note = new Notes({
        userId: req.user.id,
        title,
        description,
        tag,
      });
      const result = await note.save();
      res.status(201).send({ result });
    } catch (error) {
      return res
        .status(500)
        .send({ Error: "Internal Error Occured " + error.message });
    }
  }
);

router.put("/updatenote/:id", FetchUser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;
    let newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }
    if (note.userId.toString() !== req.user.id) {
      return res.status(401).send("Access denied");
    }

    note = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.status(200).send(note);
  } catch (error) {
    res.status(500).send({ Error: "Internal Error Occured" + error.message });
  }
});
module.exports = router;
