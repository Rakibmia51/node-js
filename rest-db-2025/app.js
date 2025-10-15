const express = require('express');
const cors = require('cors');
require("./config/db");

const userRouter = require("./routes/user.route")




const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json())

// api/users: GET
// api/users/:id : GET
// api/users/ : POST
// api/users/:id : PATCH
// api/users/:id : DELETE

app.use("/api/users", userRouter)



// Home Route
app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/views/index.html")
})

// error handler route
app.use((req, res, next)=>{
    res.status(404).json({
        message: 'Route is not found'
    })
})

// error handler server
app.use((err, req, res, next)=>{
    res.status(500).json({
        message: 'Something is broke'
    })
})

module.exports = app;