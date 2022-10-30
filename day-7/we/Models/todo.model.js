let mongoose = require("mongoose");

let todoSchema = new mongoose.Schema({
    id:Number,
    task: String,
    isCompleted :Boolean
})

let Todo = mongoose.model("todo", todoSchema)

module.exports={Todo}