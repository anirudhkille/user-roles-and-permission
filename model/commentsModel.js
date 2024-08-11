const mongoose = require("mongoose");
const commentsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    reuired: true,
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    reuired: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Comments", commentsSchema);
