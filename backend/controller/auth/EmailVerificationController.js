const User = require('../../model/userModel');
const jwt = require('jsonwebtoken');
let EmailVerificationController = async (req, res) => {
  const { token } = req.body;
  const decoded = jwt.verify(token, 'shhhhh');
  let findUser = await User.findOne({ email: decoded.email });

  if (!findUser.emailVerified) {
    await User.findOneAndUpdate(
      { email: decoded.email },
      { emailVerified: true },
    );
    res.send('Email successfully verified');
  } else {
    res.send('Email already verified');
  }

  // if (!findUser.emailVerified) {
  //   await User.findOneAndUpdate({ email: email }, { emailVerified: true });
  //   res.send('Your OTP Entered');
  // } else {
  //   res.send("Your OTP don't matched");
  // }
};

module.exports = EmailVerificationController;
