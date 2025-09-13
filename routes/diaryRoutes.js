const express = require("express");
const router = express.Router();
const {
  addDiary,
  getAllDiaries,
  getDiaryById,
  updateDiary,
  deleteDiary
} = require("../controller/diaryController");

// Endpoints
router.post("/", addDiary);       // ➝ Add new diary
router.get("/", getAllDiaries);   // ➝ Get all diaries
router.get("/:id", getDiaryById); // ➝ Get diary by ID
router.put("/:id", updateDiary);  // ➝ Update diary
router.delete("/:id", deleteDiary); // ➝ Delete diary

module.exports = router;
