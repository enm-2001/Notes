const express = require("express");
const {registerUser, authUser} = require("../controllers/userControllers");

const router = express.Router();

router.route("/").post(registerUser);  //route = api endpoint 
router.route("/login").post(authUser);

module.exports = router;