const express = require("express");
const { connection } = require("./config/db.js");
const {signUpModal} = require("./models/signup.model.js")

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

app.post("/signup", async (req, res) => {
  console.log(req.body);
  try {
    const signupData = new signUpModal(req.body);
    signupData.save();
    res.send("registered successfully"); 
} catch (err) {
    console.log(err);
  }
 
});

app.post("/login", (req, res) => {
  res.send("loged in successfully");
});

app.listen(8000, async () => {
  try {
    await connection;
    console.log("Database connected successfully");
  } catch (err) {
    console.log(err);
  }
  console.log("Listening to port no 8000");
});
