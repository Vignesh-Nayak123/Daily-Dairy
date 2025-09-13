const Diary = require("../models/Diary");

// Add new diary entry
exports.addDiary = async (req, res) => {
  try {
    const { content } = req.body;
    const diary = new Diary({ content });
    await diary.save();
    res.status(201).json(diary);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all diaries
exports.getAllDiaries = async (req, res) => {
  try {
    const diaries = await Diary.find().sort({ date: -1 });
    res.json(diaries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single diary by ID
exports.getDiaryById = async (req, res) => {
  try {
    const diary = await Diary.findById(req.params.id);
    if (!diary) return res.status(404).json({ message: "Not found" });
    res.json(diary);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update diary
exports.updateDiary = async (req, res) => {
  try {
    const diary = await Diary.findByIdAndUpdate(
      req.params.id,
      { content: req.body.content },
      { new: true }
    );
    if (!diary) return res.status(404).json({ message: "Not found" });
    res.json(diary);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete diary
exports.deleteDiary = async (req, res) => {
  try {
    const diary = await Diary.findByIdAndDelete(req.params.id);
    if (!diary) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
