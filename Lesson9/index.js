
// express js bangla tutorial 6 : http request with query parameter

// Request methods
// 1. http requests through - get, post, put, delete
// 2. Request with Route parameters -> req.params.parameterName
// 3. Request with headers -> req.query.parameterName;
// 4. Request with headers -> req.header("key")
// 5. Request with JSON data / form data inside body -> req.body.parameterName

// HTTP requests
// how to make request with query parameter?


// http request with route parameter and
const express = require('express');
const app = express();
const PORT = 3000;

app.get("/userId/:id/userAge/:age", (req, res)=>{
//    const id =  req.query.id;  //http request with query parameter
//    const name =  req.query.name; //http request with query parameter
   
//    const {id, name}= req.query; //http request with query parameter
//    res.send(`<h1>Student name is : ${name} id is : ${id}</h1>`);
 
const id = req.params.id; //http request with route parameter and Header
const age = req.params.age;
res.send(`<h1>Student id is : ${id}, age is : ${age}</h1>`);

})


app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});