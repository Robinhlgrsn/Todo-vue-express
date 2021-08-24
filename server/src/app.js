const express = require('express');

const app = express();

app.use(express.json());
const todoRouter = require('./router/todo.router')

app.use(todoRouter)
module.exports = app;