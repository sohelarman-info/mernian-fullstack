const User = require('../../model/userModel');
let OtpVerificationController = async (req, res) => {
  const { email, otp } = req.body;
  let findUser = await User.findOne({ email: email });
  console.log(findUser.otp);
  if (!findUser.emailVerified && findUser.otp == otp) {
    await User.findOneAndUpdate(
      { email: email },
      { otp: '', emailVerified: true },
    );
    res.send('Your OTP Entered');
  } else {
    res.send("Your OTP don't matched");
  }
};

module.exports = OtpVerificationController;
