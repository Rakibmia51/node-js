

const app = require('./app')
const config = require('./config/config')

const port = config.app.port;

// const mongoose = require('mongoose');

// const dbConnect = async ()=>{
//     try {
//        await mongoose.connect('mongodb://127.0.0.1:27017/rakibDB')
//         console.log("db is connected")
//     } catch (error) {
//         console.log("db is not connected")
//         console.log(error.message)
//         process.exit(1);
//     }
// }



app.listen(port, (req, res) => {
  console.log(`Server is running http://localhost:${port}`)
  
})




