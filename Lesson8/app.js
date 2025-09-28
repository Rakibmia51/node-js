const express = require('express');
const app = express();
const userRouter = require('./routes/users.route');

// Middleware
app.use("/api/user",userRouter);

app.use("/register", (req, res)=>{
    // res.status(200).json({
    //     message: "I am register page",
    //     statusCode: 200,
    // });
    // res.redirect("/login")

    res.statusCode = 200;
    res.sendFile(__dirname+"/views/register.html");
});

app.use("/login", (req, res)=>{
    // res.send("hi I am login page");
    // res.cookie("name", "rakibul");
    // res.cookie("age", "30" )
    res.clearCookie("name");
    res.append("id", "130000");
    res.end();
})

// Routes Home / error
app.get('/', (req, res) => {
  res.statusCode= 200;
  res.sendFile(__dirname+"/views/index.html");

//   res.send('<h1>Hello from Express App Home Route 🚀</h1>');
});

app.use((req, res)=>{
    res.send("<h1> 404 !!! Not a valid url</h1>")
})

module.exports = app;
