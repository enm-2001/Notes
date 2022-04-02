const express = require("express");
const { getNotes } = require("../controllers/noteController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getNotes); //get: to get notes from backend
router.routes("/create").post(createNote); //post:to post notes to our backend
// router.routes("/:id")
//     .get() //to get
//     .put() //to update
//     .delete() //to delete note

module.exports= router;