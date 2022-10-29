const express = require("express");
const { connection, todoModel } = require("./db");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

app.get("/todos", async (req, res) => {
  let result = await todoModel.find();
  res.send(result);
});

app.post("/todos/create", async (req, res) => {
  try {
    let data = req.body;
    let result = new todoModel(data);
    result.save();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

app.patch("/todos/:todoId", async (req, res) => {
  const id = req.params.todoId;
  try {
    let data = req.body;
    let result = await todoModel.updateOne({ id: id }, { $set: data });

    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

app.delete("/todos/:todoId", async (req, res) => {
  try {
     let result = await todoModel.deleteOne({id:req.params.todoId});
     res.send("Todo Deleted");
  } catch (err) {
    console.log(err);
  }
});

app.listen(9000, async () => {
  try {
    await connection;
    console.log("Database connection established");
  } catch (err) {
    console.log(err);
  }
  console.log("Listening to port 9000");
});
