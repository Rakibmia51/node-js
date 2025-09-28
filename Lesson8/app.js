const express = require('express');
const app = express();
const userRouter = require('./routes/users.route');

// Middleware
app.use("/api/user",userRouter);

// Routes Home / error
app.get('/', (req, res) => {
  res.send('<h1>Hello from Express App Home Route 🚀</h1>');
});

app.use((req, res)=>{
    res.send("<h1> 404 !!! Not a valid url</h1>")
})

module.exports = app;
