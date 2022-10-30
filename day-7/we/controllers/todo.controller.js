const {Todo} = require("../Models/todo.model.js")

const getTodo = async (req, res) => {
    let result = await Todo.find();
    res.send(result);
  }



const postTodo = async (req, res) => {
    try {
      let data = req.body;
      let result = new Todo(data);
      await result.save();
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }  


const patchTodo = async (req, res) => {
    const id = req.params.todoId;
    try {
      let data = req.body;
      let result = await Todo.updateOne({ id: id }, { $set: data });
  
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }


const deleteTodo = async (req, res) => {
    try {
      let result = await Todo.deleteOne({ id: req.params.todoId });
      res.send("Todo Deleted");
    } catch (err) {
      console.log(err);
    }
  } 



  module.exports={getTodo, postTodo, patchTodo, deleteTodo}