const express = require('express');
const multer = require('multer');
const app = express();
const PORT = 4000;




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

app.post("/register",upload.single("image"), (req, res)=>{
    res.status(200).send("file is uploaded")
})



app.get("/test", (req, res)=>{
    res.send("welcome to site")
})



app.listen(PORT, (req, res)=>{
    console.log(`Server is on going http://localhost:${PORT}`)
})