
const express = require('express')
const cors = require('cors')
const ejs = require('ejs')
const app = express()

app.set("view engine", "ejs");
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// base url - home route
app.get('/', (req, res) => {
  res.render("index")
})

// register : get
app.get('/register', (req, res) => {
  res.render("register")
})

// register : post
app.post('/register', (req, res) => {
 
})

// login : get
app.get('/login', (req, res) => {
  res.render("login")
})

// login : post


// profile protected route
app.get('/profile', (req, res) => {
  res.render("profile")
})



module.exports = app;