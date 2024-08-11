const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    reuired: true,
  },
  description: {
    type: String,
    reuired: true,
  },
  categories: {
    type: Array,
  },
});

module.exports = mongoose.model("Post", postSchema);
