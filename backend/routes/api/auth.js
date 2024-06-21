const express = require('express');
const registrationController = require('../../controller/auth/registrationController');
const secureAPI = require('../../middleware/secureAPI');
const OtpVerificationController = require('../../controller/auth/OtpVerificationController');
const taskController = require('../../controller/auth/taskController');
const loginController = require('../../controller/auth/LoginController');
const EmailVerificationController = require('../../controller/auth/EmailVerificationController');
const ForgotPasswordController = require('../../controller/auth/ForgotPasswordController');
const NewPasswordController = require('../../controller/auth/NewPasswordController');
const route = express.Router();

// http://127.0.0.1:8000/user/auth/ragistration
route.post('/ragistration', secureAPI, registrationController);

// http://127.0.0.1:8000/user/auth/otpverification
route.post('/otpverification', OtpVerificationController);

// http://127.0.0.1:8000/user/auth/emailverification
route.post('/emailverification', EmailVerificationController);

// http://127.0.0.1:8000/user/auth/login
route.post('/login', loginController);

// http://127.0.0.1:8000/user/auth/forgotpassword
route.post('/forgotpassword', ForgotPasswordController);

// http://127.0.0.1:8000/user/auth/newpassword
route.post('/newpassword', NewPasswordController);

// http://127.0.0.1:8000/user/auth/task
route.post('/task', taskController);

module.exports = route;
