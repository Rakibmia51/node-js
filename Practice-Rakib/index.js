
const app = require('./app')
const mongoose = require('mongoose');
const port = 3000;



const dbConnect = async ()=>{
    try {
       await mongoose.connect('mongodb://127.0.0.1:27017/rakibDB')
        console.log("db is connected")
    } catch (error) {
        console.log("db is not connected")
        console.log(error.message)
        process.exit(1);
    }
}

app.listen(port, async() => {
  console.log(`Server is running http://localhost:${port}`)
  await dbConnect()
})




