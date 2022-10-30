let { Router } = require("express");
const {getTodo, postTodo, patchTodo, deleteTodo} = require("../controllers/todo.controller.js")
const todoRouter = Router();

todoRouter.get("/", getTodo);

todoRouter.post("/create", postTodo);

todoRouter.patch("/:todoId", patchTodo);

todoRouter.delete("/:todoId", deleteTodo);


module.exports={todoRouter}