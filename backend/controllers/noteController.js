const Note = require("../models/noteModel");
const asyncHandler = require("express-async-handler");

const getNotes = asyncHandler (async (req,res) => {
    const notes = await Note.find({user: req.user._id})  //find: mongodb query, inthat we need user's id but we dnt want them to give id manually so we r gonna use middleware
    res.json(notes);
});

const createNote = asyncHandler( async (req, res) => {
    const {title, content, category} = req.body;

    if(!title || !content || !category){
        res.status(400);
        throw new Error("Please Fill all the feilds");
    } else {
        const note = new Note({ user: req.user._id, title, content, category});

        const createNote = await note.save();
        res.status(201).json(createNote);
    }
})

module.exports = {getNotes};