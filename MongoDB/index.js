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
   rating:{
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

// CRUD - Create, Read, Update, Delete

// Create
app.post('/products', async (req, res) => {
  try {
    // get Data from request body
        //  const title = req.body.title;
        //  const price = req.body.price;
        //  const description = req.body.description;

    const newProduct = new Product({ // For single Data
      title : req.body.title,
      price : req.body.price,
      rating : req.body.rating,
      description: req.body.description,
    })
    const productData = await newProduct.save(); // For single Data 
    
    // const productData = await Product.insertMany([ // For Multi Data
    //   {
    //     title : "Apple Phone",
    //     price : 150000,
    //     description: "This is Brand Phone",
    //   },
    //    {
    //     title : "Tecno Phone",
    //     price : 10000,
    //     description: "This is Low Brand Phone",
    //   },
    //    {
    //     title : "Realme Phone",
    //     price : 22000,
    //     description: "This is Standerd Brand Phone",
    //   },
    //   {
    //     title : "Nokia Phone",
    //     price : 25000,
    //     description: "This is Standerd Phone",
    //   }
    // ]);
    res.status(201).send(productData)

  } catch (error) {
     res.status(500).send({
      message: error.message})
  }
 
})


// GET: /products -> Return All products
app.get("/products", async (req, res)=>{
  try {
    const price = req.query.price;
    const rating = req.query.rating;
    let products;
    if(price && rating){
        // products = await Product.find({price: {$gt: price}}) //.limit();
         products = await Product.find({
            $or:[
              {price: {$gt: price}}, 
              {rating: {$gt: rating}}
            ]
        })
        //.countDocuments();
        // .sort({price: 1})
        // .select({title: 1}) //_id: 0

    }else{
        products = await Product.find()
      // .countDocuments();
        // .sort({price: 1})
        // .select({title: 1})  // _id: 0
    }
    
    if(products){
     res.status(200).send({
        success: true,
        message: "return all product",
        data: products
      })
    }else{
       res.status(404).send({
        success: false,
        message: "Products not found"
      })
    }
  } catch (error) {
     res.status(500).send({
      message: error.message})
  }
})

// GET: /products/:id -> Return a specific products
app.get("/products/:id", async (req, res)=>{
  try {
    const id = req.params.id;
    const product = await Product.findOne({_id: id}).select
    ({
      title: 1, 
      _id:  0,
      price: 1,
      description:  1

    });
    if(product){
      res.status(200).send({
        success: true,
        message: "return single product",
        data: product
      })
    }else{
      res.status(404).send({
        success: false,
        message: "Product was not found with this id"
      })
    }
  } catch (error) {
     res.status(500).send({
      message: error.message})
  }
})

// DELETE: /products/:id -> Delete a products based on id
app.delete("/products/:id", async (req, res)=>{
  try {
    const id = req.params.id;
    const product = await Product
    .findByIdAndDelete({_id: id})
    // .deleteOne({_id: id});
    if(product){
      res.status(200).send({
        success: true,
        message: "Deleted single product",
        data: product
      });
    }else{
      res.status(404).send({
        success: false,
        message: "Product was not Deleted with this id"
      });
    }
  } catch (error) {
     res.status(500).send({
      message: error.message})
  }
})

// PUT: /products/:id -> Update a products based on id
app.put("/products/:id", async (req, res)=>{
  try {
    const id = req.params.id;
     const updatedProduct = await Product
     .findByIdAndUpdate(
    //  .updateOne(
     {_id: id}, {
      $set:{
        title : req.body.title,
        price : req.body.price,
        rating : req.body.rating,
        description: req.body.description,
      }
    },
    {new: true}
  )
    if(updatedProduct){
      res.status(200).send({
        success: true,
        message: "Updated single product",
        data: updatedProduct
      });
    }else{
      res.status(404).send({
        success: false,
        message: "Product was not Updated with this id"
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message})
  }
})

// DATABASE -> collections(table) -> document(row)

// POST: /products -> Create a products
// GET: /products -> Return All products
// GET: /products/:id -> Return a specific products
// PUT: /products/:id -> Update a products based on id
// DELETE: /products/:id -> Delete a products based on id


app.listen(port, async() => {
  console.log(`Example app listening on port http://localhost:${port}`)
    await connectDB()

})




