
const express = require('express');
const chalk = require('chalk');
const app = express();



const PORT =4000;


app.get("/", (req, res)=>{
    res.status(200).send("Welcom Site");
})

app.get("/products", (req, res)=>{
    res.status(200).send("list all the products");
})

app.post("/", (req, res)=>{
    res.status(201).send("Create a product");
})


app.listen(PORT, (req, res)=>{
    console.log(chalk.blue(`Server is on http:/localhost:${PORT}`));
})