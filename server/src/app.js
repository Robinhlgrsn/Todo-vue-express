const express = require('express');
const path = require('path')
const cors = require('cors');

const app = express();

const todoRouter = require('./router/todo.router')

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', '..', 'client', 'dist')))

app.use(todoRouter);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'client', 'dist', 'index.html'))
});

module.exports = app;
