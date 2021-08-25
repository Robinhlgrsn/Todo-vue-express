const express = require('express');
const path = require('path')
const cors = require('cors');

const app = express();

const todoRouter = require('./router/todo.router')

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')))

app.use(todoRouter);

app.get('/*', (req, res) => {
  console.log(__dirname)
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;
