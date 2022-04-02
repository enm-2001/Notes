const express = require("express");
const notes = require('./data/notes');
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleWare");

const app = express();
dotenv.config(); 
connectDB();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("API is running..");
});  //gets the data from backend and serves it

// app.get("/api/notes",(req,res)=>{   ///api/notes - endpoint
//     res.send(notes);
// });

// app.get("/api/notes/:id",(req,res)=>{
//     const note=notes.find((n)=>n._id==req.params.id);  //fetch id from url using req.params
//     res.send(note);
// });

app.use('/api/users',userRoutes); //all the routes related to users go to users roues file
app.use('/api/notes',noteRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`Server started on port ${PORT}`));
//app.listen(5000,console.log("Server started on port 5000"));