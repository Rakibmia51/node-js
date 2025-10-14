const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const usersRouter = require("./routes/users.route");

const app = express();
app.use(cors()); //// enable CORS
// Built-in parser (no need to install body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Users Route
app.use("/users",usersRouter);

// Home Route
app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/views/index.html");
})

// route not found error
app.use((req, res, next)=>{
    res.status(404).json({
        message: "Route not found Error",
    })
})

// Server error
app.use((err, req, res, next)=>{
    res.status(404).json({
        message: "Something broke",
    })
})
module.exports = app;