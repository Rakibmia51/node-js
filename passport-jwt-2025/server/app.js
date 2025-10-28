const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express()
require("./config/database");

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json())


// home route
app.get("/", (req, res)=>{
    res.send("welcome to the Home");
})

// Register route
app.post("/register", (req, res)=>{
    res.send("welcome to the Register");
})


// Login route
app.post("/login", (req, res)=>{
    res.send("welcome to the login");
})

// Profile route
app.post("/profile", (req, res)=>{
    res.send("welcome to the profile");
})






// resource not found
app.use((req, res, next)=>{
    res.status(404).json({
        message: "route not found"
    })
})
// Server error
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})



module.exports = app;