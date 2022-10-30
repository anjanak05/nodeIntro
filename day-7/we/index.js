const express = require("express");
const { connection} = require("./config/db.js");
const { todoRouter } = require("./Routes/todo.route.js")
const {Todo} = require("./Models/todo.model.js")

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
})

// app.get("/todo/",(req, res) => {
//   console.log(req.query.task)

//     res.send(req.query.task);
//   })

app.use("/todos", todoRouter)

app.listen(9000, async () => {
  try {
    await connection;
    console.log("Database connection established");
  } catch (err) {
    console.log(err);
  }
  console.log("Listening to port 9000");
});
