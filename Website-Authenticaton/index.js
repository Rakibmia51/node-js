require("dotenv").config();
const express = require('express')
const cors = require("cors");
const  mongoose  = require("mongoose");

const app = express()

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());




const PORT = process.env.PORT || 5000;
const dbUrl = process.env.DB_URL;

mongoose
.connect(dbUrl)
.then(()=>{
    console.log('mongodb atlas is connected')
})
.catch((error)=>{
    console.log(error);
    process.exit(1);
})



// home route
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/./views/index.html");
})




// Register
app.post('/register', (req, res) => {
    try {
        const {username, email, password} = req.body;
        const newUser = {
            username,
            email,
            password
        }
        res.status(201).json({
        message: "User is created",
        newUser
        })
    } catch (error) {
        
    }
})

// Login
app.post('/login', (req, res) => {
  res.status(200).json({
    message: "User is Login"
  })
})






// route not found error
app.use((req, res, next)=>{
    res.status(404).json({
        message: "Route not found",
    })
})

// Server error
app.use((err, req, res, next)=>{
    res.status(500).json({
        message: "Something broke server",
    })
})


app.listen(PORT, () => {
  console.log(`Server is on port http://localhost:${PORT}`)
})