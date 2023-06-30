const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");
// Register a User
exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: { public_id: "This is a sample id", url: "profilepicUrl" },
  });
  //   const token = user.getJWTToken();

  //   res.status(201).json({
  //     success: true,
  //     token,
  //   });

  sendToken(user, 201, res);
});

// Login a User
exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  //checking if user have given both email and password
  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email & Password", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  //   const token = user.getJWTToken();
  //   res.status(200).json({
  //     success: true,
  //     token,
  //   });
  sendToken(user, 200, res);
});
