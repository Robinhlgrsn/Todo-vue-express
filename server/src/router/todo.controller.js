let todos = require('../models/todo.model')

function getAllTodos(req, res) {
  res.status(200).json(todos)
}

function getTodo(req, res) {
  const todo = todos.find(todo => todo.id === +req.params.id);
  if (todo) {
    res.status(200).json(todo)
  } else {
    res.status(400).json({
      error: 'Todo not found!'
    });
  }
}

function removeTodo(req, res) {
  todoToRemove = todos.find(todo => todo.id === +req.params.id);
  if (todoToRemove) {
    const remainingTodos = todos.filter(todo => todo.id !== todoToRemove.id);
    todos = remainingTodos;
    res.status(200).json(todoToRemove);
  } else {
    res.status(400).json({
      error: 'No todo to remove!',
    });
  }
}

function addTodo(req, res) {
  if(req.body) {
    res.status(200).json(req.body);
    todos.push(req.body);
  } else {
    res.status(400).json({
      error: 'Cant add todo!'
    })
  }
}

module.exports = {
  getAllTodos,
  getTodo,
  removeTodo,
  addTodo
}