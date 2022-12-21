const express = require("express");
const cors = require("cors")
require("dotenv").config()
const { connection } = require("./config/db.js");
const {userRouter} =require("./routes/user.route.js")
const {notesRouter} = require("./routes/notes.route.js")
const app = express();
app.use(cors())
app.use(express.json());
const PORT = process.env.PORT || 8000
app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

app.get("/dashboard", (req, res) => {
const token = req.headers.authorization.split(" ")[1]
// console.log(token)
  try{var decoded = jwt.verify(token, 'abc12345');
      console.log(decoded)
  res.send(`welcome ${decoded.email} DAshboard Page`)}
  catch(err){
    console.log(err)
    res.send("PLease login again")
  }
});

app.use("/notes", notesRouter)
app.use("/user", userRouter)

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Database connected successfully");
  } catch (err) {
    console.log(err);
  }
  console.log("Listening to port no 8000");
});