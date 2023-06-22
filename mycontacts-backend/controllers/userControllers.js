const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//@des post a user register
//@routes Post/api/contacts
//@access public
const userRegister = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(404);
    throw new Error("All filed are mandatory");
  }
  const userAvaliable = await User.findOne({ email });
  if (userAvaliable) {
    res.status(404);
    throw new Error("User allready Register");
  }
  //Hash password
  const hashpassword = await bycrypt.hash(password, 10);
  console.log("Hashed Password", hashpassword);
  //user create
  const user = await User.create({ username, email, password: hashpassword });
  console.log(`User created ${user}`);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(404);
    throw new Error("User data is not valid");
  }
  res.json(user);
});

//@des post a user login
//@routes Post /api/contacts
//@access public
const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(404);
    throw new Error("All fileds are mandatory");
  }
  const user = await User.findOne({ email });
  //compare password with hashpassword
  if (user && (await bycrypt.compare(password, user.password))) {
    const accessToken = jwt.sign({
      user: {
        username: user.username,
        email: user.email,
        id: user.id,
      },
    }, process.env.ACCESS_TOKEN_SECERT,
    {expiresIn:"1m"} );
    res.status(201).json(accessToken);
  }
  else{
    res.status(404)
    throw new Error("email and password are not")
  }

  res.json({ message: "Login" });
});
//@des get a  current user
//@routes Get /api/contacts
//@access private
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);

});

module.exports = { userRegister, userLogin, currentUser };
