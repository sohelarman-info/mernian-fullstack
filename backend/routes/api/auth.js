const express = require('express');
const registrationController = require('../../controller/auth/registrationController');
const secureAPI = require('../../middleware/secureAPI');
const route = express.Router();

// /user/auth/ragistration
route.get('/ragistration', secureAPI, registrationController);

route.get('/login', function (req, res) {
  res.send('this is login page');
});

module.exports = route;
