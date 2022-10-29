const express = require("express");
const { connection, movieModel } = require("./db");

const app = express();
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

app.get("/movies", async(req, res) => {
  try{
    let result = await  movieModel.find()
  res.send(result);
  }catch(error){
console.log(error)
  }
});

app.delete("/deleteMovie/:originalTitle", async(req, res) => {
  console.log(req.params.originalTitle)
  try{
    let result = await  movieModel.deleteOne({originalTitle:req.params.originalTitle})
  res.send(result);
  }catch(error){
console.log(error)
  }
});



app.post("/addMovie", async(req, res) => {
  try{
    let addResult =   req.body
let movieDataAdd = new movieModel(addResult)
await movieDataAdd.save()
  }catch(error){
console.log(error)
  }
});


app.patch("/updateMovie/:originalTitle", async(req, res) => {
  console.log(req.params.originalTitle)
  try{
    let result = await  movieModel.updateOne({originalTitle:req.params.originalTitle}, {$set:{originalTitle:"Dhom Aishwaya "}})
  res.send(result);
  }catch(error){
console.log(error)
  }
});


app.listen(8080, async() => {
  try {
    await connection
    console.log("connection established");
  } catch (err) {
    console.log(err);
    console.log("Failed");
  }
  console.log("WELCOME");
});
