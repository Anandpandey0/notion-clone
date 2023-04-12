const mongoose = require("mongoose");

const pageItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
});

const pageListSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
    ref: "User",
  },
  items: {
    type: [pageItemSchema],
    required: true,
    default: [],
  },
});
mongoose.models = {};
const PageList = mongoose.model("PageList", pageListSchema);

module.exports = PageList;
