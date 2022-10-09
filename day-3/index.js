const express = require("express")
const fs = require("fs")
const app = express()

app.use(express.json())

app.get("/", (req, res)=>{
res.send("Welcome to Home Section")
})

app.get("/profile", (req ,res)=>{
    res.send("Welcome to Profile Section")
})

app.post("/uploadData", (req ,res)=>{
    // fs.appendFile()
    res.send("Welcome to Upload Page")
})

app.listen(5000, ()=>{
    console.log("Welcome to Port 5000")
})