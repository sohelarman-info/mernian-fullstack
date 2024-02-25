const express = require('express');
const route = express.Router();

route.get('/admin', function (req, res) {
  res.send('this is admin page');
});

module.exports = route;
