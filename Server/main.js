import mongoose, { model } from "mongoose";
import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
await mongoose.connect("mongodb://localhost:27017/todolist");
const schema = mongoose.Schema({
  id: String,
  task: String,
  isCompleted: Boolean,
});
const Model = mongoose.model("Todo", schema);
const insertion = async (task) => {
  task = task.toUpperCase();
  const tasks = await Model.find({});
  console.log(tasks.length);
  for (let i = 0; i < tasks.length; i++) {
    if (task === tasks[i].task) return;
  }
  const todo = new Model({
    task: task,
    isCompleted: false,
  });
  await todo.save();
};
const deletion = async (id) => {
  await Model.deleteOne({ _id: id });
};
app.post("/", (req, res) => {
  if (req.body.task !== "") insertion(req.body.task);
});
app.post("/delete", (req, res) => {
  deletion(req.body.id);
});
app.get("/", (req, res) => {
  const func = async () => {
    const task = await Model.find({});
    res.json(task);
  };
  func();
  //res.send("<h1>Backend Server is Running Fine...</h1>")
});
app.post("/done", (req, res) => {
  const done = async () => {
    const task = await Model.find({ _id: req.body.id });
    task[0].isCompleted = req.body.done;
    console.log(task);
    await task[0].save();
  };
  done();
});
app.listen(3000, () => {
  console.log("Server is running fine");
});
