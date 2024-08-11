const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to databse");
  } catch (err) {
    console.log("error connecting while connecting db", err);
  }
};

module.exports = { connectDB };
