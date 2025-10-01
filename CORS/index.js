const express = require('express');
const cors = require('cors'); // npm install cors

const userRouter = require('./routes/users.route');

const app = express();
const PORT = 3000;


// CORS
app.use(express.urlencoded({extended:true}));
app.use(userRouter); // Users
app.use(cors())





app.use((req, res, next)=>{
    res.status(404).json({
        message: "Data not Found 404 Error",
    })
})


app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})