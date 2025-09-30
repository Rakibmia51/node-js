// Step 01: npm init -y
// step 02: npm install express
// step 03: server code write
// STEP 04: Create .env file (write the text)
// step 05: npm install dotenv


require('dotenv').config(); // config data .env file

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // get data from .env file

app.get("/", (req, res)=>{
    res.send("Hello First server")
})

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})



