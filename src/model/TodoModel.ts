import { Document, Schema, model } from "mongoose";

const todoSchema = new Schema({
  task: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const TodoModel = model("Todo", todoSchema);
export default TodoModel;
