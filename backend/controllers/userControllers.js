const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");


//JWT token certifies the user identity, and sends it to the client. that means token sent to frontend which uses it to authenticate to backend 

//@description     Auth the user
//@route           POST /api/users/login
//@access          Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
  
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        pic: user.pic,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid Email or Password");
    }
  });
  
  //@description     Register new user
  //@route           POST /api/users/
  //@access          Public

const registerUser = asyncHandler(async (req,res) => {
    const {name,email,password,pic} = req.body;

    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400); //400->error
        throw new Error("User Already Exists");
    }

    const user = await User.create({
        name,
        email,
        password,
        pic,
    });

    if(user){
        res.status(201).json({ //201->success
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            pic: user.pic,
            token: generateToken(user._id)
        });
    }else{
        res.status(400)
        throw new Error("Error Occurred!");
    }
    // res.json({
    //     name,
    //     email,
    // });
});

module.exports = {registerUser, authUser};