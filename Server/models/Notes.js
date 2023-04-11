const mongoose = require("mongoose");
const noteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  title: {
    type: String,
    required: true,
    unique: false,
  },
  description: {
    type: String,
    required: true,
    unique: false,
  },
  tag: {
    type: String,
    default: "General",
    unique: false,
  },
  date: {
    type: String,
    default: Date.now,
    unique: false,
  },
});
module.exports = mongoose.model("note", noteSchema);
