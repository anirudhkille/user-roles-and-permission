const mongoose = require("mongoose");
const likesSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model("likes", likesSchema);
