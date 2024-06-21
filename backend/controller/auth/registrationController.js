const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const otpGenerator = require('otp-generator');
const User = require('../../model/userModel');
let registrationController = async (req, res) => {
  // /user/auth/ragistration
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.send({ error: 'Please fill the all field' });
  }
  if (password && password.length < 6) {
    return res.send({ error: 'Password less then 6' });
  }

  let existingUser = await User.find({
    email: email,
  });

  let otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    lowerCaseAlphabets: false,
    specialChars: false,
  });

  if (existingUser.length > 0) {
    return res.send({ error: `${email} Email has already exist!` });
  } else {
    // Email verification by Link

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
        subject: 'Registration OTP Received', // Subject line
        text: email, // plain text body
        html: `Click to verify your email: <a href="http://localhost:5173/emailverification/${token}">Click to verify</a>`, // html body
      });
    });

    // for OTP Time Out

    // setTimeout(async () => {
    //   await User.findOneAndUpdate({ email: email }, { otp: '' });
    //   console.log('Time out done');
    // }, 10000);

    bcrypt.hash(password, 4, async function (err, hash) {
      let user = new User({
        name: name,
        email: email,
        password: hash,
        otp: otp,
      });
      user.save();

      // Email verification by OTP
      // const transporter = nodemailer.createTransport({
      //   service: 'gmail',
      //   port: 587,
      //   secure: false, // Use `true` for port 465, `false` for all other ports
      //   auth: {
      //     user: 'sohelarman.info@gmail.com',
      //     pass: 'tnde aekp dqgd nnae',
      //   },
      // });
      // const info = await transporter.sendMail({
      //   from: '"Mernian OTP" <sohelarman.info@gmail.com>', // sender address
      //   to: email, // list of receivers
      //   subject: 'Registration OTP Received', // Subject line
      //   text: email, // plain text body
      //   html: `Your OTP is: <h2>${otp}</h2>`, // html body
      // });
    });

    res.send('Your account successfully created!');
  }
};

module.exports = registrationController;
