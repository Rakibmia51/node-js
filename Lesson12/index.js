// Create server

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static("public")) //  express static middleware

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.listen(PORT, ()=>{
    console.log(`Server Running is at http://localhost:${PORT}`)
})