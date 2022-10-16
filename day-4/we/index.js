const express = require("express")
const app = express()
const morgan = require("morgan")

app.use(morgan(':method  :url HTTP/:http-version :status :res[content-length] - :response-time ms'));

app.use((req, res, next)=>{
console.log(`used method ${req.method} and the url is ${req.url}`)
next()
})

app.get("/", (req, res)=>{
    res.send("Welcome to Home")
})

app.get("/about", (req, res)=>{
res.send("Welcome to about page")
})

app.get("/contact", (req, res)=>{
    res.send("Welcome to contact page")
    })

app.listen(8000, ()=>{
    console.log("Welcome")
})