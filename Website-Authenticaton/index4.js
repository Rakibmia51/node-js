// Salting and Hashing Password | authentication

require("dotenv").config();
const express = require('express')
const cors = require("cors");
const  mongoose  = require("mongoose");

const bcrypt = require('bcrypt');
const saltRounds = 10;


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
        bcrypt.hash(req.body.password, saltRounds, async function(err, hash) {
            const newUser = new User ({
            username: req.body.username,
            email: req.body.email,
            password: hash
             })
             await newUser.save();
            res.status(201).json(newUser)
        });

    } catch (error) {
         res.status(500).json(error.message)
    }
})

// Login
app.post('/login', async (req, res) => {
   try {
        const email = req.body.email;
        const password = req.body.password;
        const user = await User.findOne({email: email})
            if(user){
                bcrypt.compare(password, user.password, function(err, result) {
                    if(result === true){
                        res.status(201).json({status : 'valid user'}) 
                    }else{
                        res.status(200).json({status : 'user not found'}) 
                        }
                });
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