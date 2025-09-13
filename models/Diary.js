const mongoose = require("mongoose");

const DiarySchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  content: { type: String, required: true }
});

module.exports = mongoose.model("Diary", DiarySchema);
