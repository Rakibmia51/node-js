// Do you know how to create a node.js server?
// In this, I will discuss one of the built-in (node.js own)
// modules, HTTP, which will allow you to create a server.


// Module | http module - create http server

const http =require('http');
const port = 3000;
const hostname = '127.0.0.1'

const myServer = http.createServer((req, res)=>{
    res.end("<h1>Hello </h1>");
});

myServer.listen(port, hostname, ()=>{
    console.log(`server is running successfully at http://${hostname}:${port}`);
});