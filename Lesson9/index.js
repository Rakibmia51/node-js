
// express js bangla tutorial 6 : http request with query parameter

// Request methods
// 1. http requests through - get, post, put, delete
// 2. Request with Route parameters -> req.params.parameterName
// 3. Request with headers -> req.query.parameterName;
// 4. Request with headers -> req.header("key")
// 5. Request with JSON data / form data inside body -> req.body.parameterName

// HTTP requests
// how to make request with query parameter?
// http request with route parameter and Header
// how to make post request with josn or from data
    // - Install body-parser npm package | npm link https://www.npmjs.com/package/body-parser


const express = require('express');
const app = express();
const PORT = 3001;
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));
// JSON body পার্স করা
app.use(bodyParser.json());

app.get("/register", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
})


app.post('/register', (req, res) => {
//   const name = req.body.name; // { name: "Rakib", age: 25 }
//   const age = req.body.age;
//   res.send(`Hello ${name} you are ${age}`);

    const fullName = req.body.fullName;
    const age = req.body.age;
    res.send(`Hello! ${fullName} and your age: ${age}`)
});


app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});