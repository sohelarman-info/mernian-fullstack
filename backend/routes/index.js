const express = require('express');
const apiRouter = require('./api');
const todoRouter = require('./api/todo');
const ProductRouter = require('./api/productRoute');
const route = express.Router();

route.use('/user', apiRouter);
route.use('/product', ProductRouter);
route.use('/todo', todoRouter);
route.get('/', async (req, res) => {
  res.send('Hello world! This is home page');
});

module.exports = route;
