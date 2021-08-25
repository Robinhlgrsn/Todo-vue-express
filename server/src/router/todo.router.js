const express = require('express');

const { getAllTodos, getTodo, removeTodo, addTodo } = require('./todo.controller')
const todoRouter = express.Router();

todoRouter.get('/todos', getAllTodos)
todoRouter.post('/todos', addTodo)
todoRouter.get('/todos/:id', getTodo)
todoRouter.delete('/todos/:id', removeTodo)

module.exports = todoRouter;
