// middleware
// -> What is middleware?
// -> Why do we need middleware?
// -> What are the different types of middleware?

// step 01: npm init -y
// step 02: npm install nodemon express
// step 03: server create 







const express = require('express');
const app = express();
const PORT = 3000;

// Custom middleware
const myMiddleware = (req, res, next) => {
    console.log("Middle ware function");
    req.currentTime = new Date(Date.now());
    next();
}

app.use(myMiddleware);

// Routes
app.get("/", (req, res) => {
    console.log("I am home " + req.currentTime);
    res.send("<h1>Hello first Server is Running </h1>");
});

app.get("/about", (req, res) => {
    console.log("I am About " + req.currentTime);
    res.send("<h1>This is About Page </h1>");
});

// 404 handler (unknown routes)
app.use((req, res, next) => {
    res.status(404).send("404 bad url request");
});

// Error handler (server error)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

