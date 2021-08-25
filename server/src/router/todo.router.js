const express = require('express');

const { getAllTodos, getTodo, removeTodo, addTodo } = require('./todo.controller')
const todoRouter = express.Router();

todoRouter.get('/', getAllTodos)
todoRouter.post('/', addTodo)
todoRouter.get('/:id', getTodo)
todoRouter.delete('/:id', removeTodo)

module.exports = todoRouter;
