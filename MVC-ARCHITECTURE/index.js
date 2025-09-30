const express = require('express');
const app = express();
const PORT = 3000;

app.get("/users", (req, res)=>{
    res.send("Hello Users")
})

app.listen(PORT, ()=>{
    console.log(`server is running http://localhost:${PORT}`)
})