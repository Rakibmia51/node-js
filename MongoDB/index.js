const express = require('express')

const mongoose = require('mongoose');

const app = express()
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// create product schema
const productsSchema = new mongoose.Schema({
  title:{
    type:String,
    required: true,
  },
  price:{
    type:Number,
    required: true,
  },
  description:{
    type:String,
    required: true,
  },
  createdAt: {
    type : Date,
    default: Date.now
  },
});
// create product model
const Product = mongoose.model("Products", productsSchema);


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

app.post('/products', async (req, res) => {
  try {
    // get Data from request body
        //  const title = req.body.title;
        //  const price = req.body.price;
        //  const description = req.body.description;

    // const newProduct = new Product({ // For single Data
    //   title : req.body.title,
    //   price : req.body.price,
    //   description: req.body.description,
    // })
    // const productData = await newProduct.save(); // For single Data 
    
    const productData = await Product.insertMany([ // For Multi Data
      {
        title : "Apple Phone",
        price : 150000,
        description: "This is Brand Phone",
      },
       {
        title : "Tecno Phone",
        price : 10000,
        description: "This is Low Brand Phone",
      },
       {
        title : "Realme Phone",
        price : 22000,
        description: "This is Standerd Brand Phone",
      }
    ]);
    res.status(201).send(productData)

  } catch (error) {
     res.status(500).send({
      message: error.message})
  }
 
})

app.listen(port, async() => {
  console.log(`Example app listening on port http://localhost:${port}`)
    await connectDB()

})


// DATABASE -> collections(table) -> document(row)