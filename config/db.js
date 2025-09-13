const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vigneshnayak:4NC8hLjsxrhmpn5l@cluster0.jm5sann.mongodb.net/Dairy"
    );
    console.log("MongoDB connected...");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
