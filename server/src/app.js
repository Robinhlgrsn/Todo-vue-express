const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
const todoRouter = require('./router/todo.router')

app.use(todoRouter)
module.exports = app;
