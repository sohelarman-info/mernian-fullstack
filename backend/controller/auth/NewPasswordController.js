const User = require('../../model/userModel');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

let NewPasswordController = async (req, res) => {
  const { password, token } = req.body;
  const decoded = jwt.verify(token, 'shhhhh');

  bcrypt.hash(password, 10, async function (err, hash) {
    await User.findOneAndUpdate({ email: decoded.email }, { password: hash });
  });

  res.send({ success: 'Password Changed' });
};

module.exports = NewPasswordController;
