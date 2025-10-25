// database encryption authentication

require("dotenv").config();
const express = require('express')
const cors = require("cors");
const  mongoose  = require("mongoose");

const User = require("./models/user.model")

const app = express()

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());




const PORT = process.env.PORT || 4000;
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
app.post('/register', async (req, res) => {
    try {
        const {username, email, password} = req.body;
        const newUser = new User ({
            username,
            email,
            password
        }) 
       await newUser.save();
        res.status(201).json(newUser)
    } catch (error) {
         res.status(500).json(error.message)
    }
})

// Login
app.post('/login', async (req, res) => {
   try {
        const {email, password} = req.body;
        const user = await User.findOne({email: email})
            if(user && user.password === password){
                res.status(200).json({status : 'valid user'})
            }else{
                 res.status(200).json({status : 'user not found'}) 
            }

    } catch (error) {
         res.status(500).json(error.message)
    }
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