const express = require('express')

const mongoose = require('mongoose');

const app = express()
const port = 3000

const connectDB = async ()=>{
    try {
       await mongoose.connect('mongodb://127.0.0.1:27017/testProductsDB');
        console.log("db is connected");
    } catch (error) {
         console.log("db is not connected")
         console.log(error.message)
         process.exit(1);
    }
}

// DB connected then/catch
// mongoose.connect('mongodb://127.0.0.1:27017/testProductsDB')
// .then(()=>console.log("db is connected"))
// .catch((error)=>{
//     console.log("db is not connected")
//     console.log(error);
//     process.exit(1);
// })

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, async() => {
  console.log(`Example app listening on port http://localhost:${port}`)
    await connectDB()

})
