const userModel = require("../model/userModel");
const bcryptjs = require("bcryptjs");

const registerUserController = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      error: true,
      message: "All fields must be filled",
    });
  }

  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    return res.status(409).json({
      error: true,
      message: "Email already registered",
    });
  }

  const hashedPassword = await bcryptjs.hash(password, 10);

  const user = new userModel({
    ...req.body,
    password: hashedPassword,
  });

  await user.save();

  // Remove password from the response
  const { password: removedPassword, ...userWithoutPassword } = user.toObject();

  return res.status(201).json({
    error: false,
    message: "Account registered successfully",
    data: userWithoutPassword,
  });
};

module.exports = { registerUserController };
