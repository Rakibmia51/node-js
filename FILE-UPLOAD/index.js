const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');


const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json())
const PORT = 4000;

// connecting to DB
const connectDB = async ()=>{
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/usersTestDB");
    console.log("db is connected")
    
  } catch (error) {
    console.log('db is not connected')
    console.log(error)
    process.exit(1)
  }
}


// creating schema and model
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "user name is required"]
  },
   image: {
    type: String,
    required: [true, "user Image is required"]
  }
})
// create model
const User = mongoose.model("Users", userSchema);


// file Upload Start - multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name)
  }
})
const upload = multer({ storage: storage })

// file Upload End - multer


app.get("/register", (req, res)=>{
    res.status(200).sendFile(__dirname + "/index.html")
})

app.post("/register",upload.single("image"), async (req, res)=>{
    try {
      const newUser = new User({
        name: req.body.name,
        image: req.file.filename,
      })
      await newUser.save();
      res.status(201).send(newUser)
    } catch (error) {
      res.status(500).send(error.message);
    }
})



app.get("/", (req, res)=>{
    res.send("welcome to site")
})



app.listen(PORT, async (req, res)=>{
    console.log(`Server is on going http://localhost:${PORT}`)
    await connectDB();
})