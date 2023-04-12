const mongoose = require("mongoose");

const todoItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

const todoListSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
    ref: "User",
  },
  items: {
    type: [todoItemSchema],
    required: true,
    default: [],
  },
});
mongoose.models = {};
const TodoList = mongoose.model("TodoList", todoListSchema);

module.exports = TodoList;
