// Set Up the .env variables

// -> .env file full form environment file
// -> Secret / hidden file - Only you can access it

// Why .env file?
// -> To store private environment variables for your applicaton. Example-
// 	-http PORT to listen the server
// 	-Database URL,
// 	-API keys etc.
// -> GitLab / Heroku support the usage of environment variables.


// How to use .env variables?

// step 1: Create an .env file in the root directory
// step 2: Define environment variable(s) using uppercase letters and uderscore if  more than one word. example-
// 	-PORT
// 	-DATABASE_URL
// step 3: Assign the values without double quotation and space
// 	-PORT = 3000
// 	-DATABASE_URL=mongodb+srv//medo:demo1234@cluster0.0t12q.mongodb.net/test?
// step 4: You can make a comment using#
// 	#server port
// 	PORT=3000
// step 5: install dotenv package -> npm install dotenv
// step 6: require dotenv -> require('dotenv').config();
// step 7: Access the env variables from anywhere using process.
// 	Example- process.env.PORT;
// Optional: DotENV Extension - nice syntax highlighting in your .env file 




// step by step

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



