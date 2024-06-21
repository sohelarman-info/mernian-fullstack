const userModel = require('../../model/userModel');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

let ForgotPasswordController = async (req, res) => {
  const { email } = req.body;
  let ExistingUser = await userModel.find({ email: email });
  if (ExistingUser.length > 0) {
    res.send(ExistingUser);
    jwt.sign({ email: email }, 'shhhhh', async function (err, token) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: 'sohelarman.info@gmail.com',
          pass: 'tnde aekp dqgd nnae',
        },
      });
      const info = await transporter.sendMail({
        from: '"Mernian OTP" <sohelarman.info@gmail.com>', // sender address
        to: email, // list of receivers
        subject: 'Reset Password', // Subject line
        text: email, // plain text body
        html: `Click to change your password: <a href="http://localhost:5173/newpassword/${token}">Click to verify</a>`, // html body
      });
    });
  } else {
    res.send({ error: 'User not found' });
  }
};

module.exports = ForgotPasswordController;
