
const express = require('express')
const cors = require("cors")
require("./config/db");

const bodyParser = require('body-parser')



const usersRouter = require("./routes/route");

const app = express()

app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}))




// users route
app.use("/users", usersRouter);

// Home Route
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
})

// From HTML Route
app.get('/users', (req, res) => {
  res.sendFile(__dirname + "/views/users.html")
})


// routers error
app.use((req, res, next)=>{
    res.status(404).json({
        message: "Route not found Error",
    })
})

// server error
app.use((err, req, res, next)=>{
    res.status(404).json({
        message: "Something broke",
    })
})

module.exports = app;