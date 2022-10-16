const express = require("express")
const app  = express()

app.get("/", (req, res)=>{
    res.send("Welcome to Home Page")
})
app.listen(5000, ()=>{
    console.log("Welcome to Page")
})