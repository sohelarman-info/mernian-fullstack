const express = require('express');
const authRouter = require('./auth');
const adminDashboard = require('./admin');
const route = express.Router();

route.use('/auth', authRouter);
route.use(process.env.API_URL_VIRSION, adminDashboard);

module.exports = route;
