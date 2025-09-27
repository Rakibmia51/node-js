// Creating a server using express is too easy. you need to
//  know about different HTTP methods for handling client 
//  requests on a server. In this video, I will show how
//   to create an express server and how HTTP methods work.


// step:01  npm init -y 
// step:02  npm install express nodemon


const app = require('./app')
const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});

