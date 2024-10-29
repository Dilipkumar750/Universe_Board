const User = require("../models/adminModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "all fields are required" });
  }

  try {
    const existUser = await User.findOne({ email });
    if (!existUser) {
      return res
        .status(401)
        .json({ success: false, message: "authentication failed" });
    }

    const isPasswordValid = await bcrypt.compare(password, existUser.password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: "incorrect password" });
    }

    if (existUser.block === true) {
      return res
        .status(401)
        .json({ success: false, message: "you are blocked by admin" });
    }

    const token = jwt.sign(
      { userId: existUser._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );

    return res
      .status(200)
      .json({ success: true, message: "Login Success", data: token });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Login Failed.",
      error: error.message,
    });
  }
};

exports.register = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(404)
      .json({ success: false, message: "All field are required" });
  }

  try {
    const existUser = await User.findOne({ email });

    if (existUser) {
      return res
        .status(409)
        .json({ success: false, message: "Email already registered." });
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: hashedPassword,
    });
    await newUser.save();

    return res
      .status(200)
      .json({ success: true, message: "admin register successfully" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An unexpected error occurred.",
      error: error.message,
    });
  }
};
