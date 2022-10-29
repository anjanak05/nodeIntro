const mongoose = require("mongoose")
let connection = mongoose.connect("mongodb://127.0.0.1:27017/web19")

let todoSchema = mongoose.Schema({
    id:Number,
    task: String,
    isCompleted :Boolean
})

let todoModel = mongoose.model("todo", todoSchema)

module.exports= {
    connection, todoModel
}