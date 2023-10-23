const mongoose = require("mongoose");
const toDoSchema = mongoose.Schema(
  {
    task: {
      type: String,
      required: [true, "please add todo"],
    },
    status: {
      type: String,
      enum: ["todo", "progress", "done"],
      default: "todo",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Task", toDoSchema);
