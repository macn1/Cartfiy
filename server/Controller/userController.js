const User = require("../Model/userModel");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const { validationResult } = require("express-validator");

const registerUser = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    console.log(req.body);

    const userExist = await User.findOne({ email });

    console.log(userExist);
    if (userExist) {
      throw new Error("user already exist");
    }

    const saltRound = 10;
    const hashPass = await bcrypt.hash(password, saltRound);

    const newUser = new User({ name, email, phone, password: hashPass });

    await newUser.save();

    res.status(201).json({ status: "success", data: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const authUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    console.log(user);

    if (!user) {
      res.status(401).json({ message: "user doesnt exist signup please" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "invalid email id or password " });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      user: user,
      message: " user registerd successfully",
      token: token,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const verifyToken = (req, res, next) => {
  const cookie = req.headers.cookie;
  // console.log(cookie);
  // const headers = req.headers["authorization"];
  const token = cookie.split("=")[1];
  console.log(token);

  if (!token) {
    res.status(404).json({ message: " no token found" });
  }

  jwt.verify(String(token), process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log("wdsdwd");
      return res.status(400).json({ message: "invalid token" });
    }
    console.log(user);
    req.id = user.id;
  });
  next();
};

const getUser = async (req, res) => {
  try {
    const userId = req.id;
    const user = await User.findById(userId, "-password");
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ status: true, user: user });
  } catch (err) {
    return new Error(err);
  }
};



const getAllUser = async (req, res,) => {
  try {
console.log("hello da");

    const user = await User.find();
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ status: true, users: user });
  } catch (err) {
    return new Error(err);
  }
};





module.exports = { registerUser, authUser, verifyToken, getUser,getAllUser };
