const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const diaryRoutes = require("./routes/diaryRoutes");
const connectDB = require("./config/db");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static frontend
app.use(express.static(path.join(__dirname, "public")));

// Connect DB
connectDB();

// Routes
app.use("/api/diary", diaryRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
