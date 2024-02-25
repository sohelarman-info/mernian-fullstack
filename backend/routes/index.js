const express = require('express');
const apiRouter = require('./api');
const route = express.Router();

route.use('/user', apiRouter);

module.exports = route;
