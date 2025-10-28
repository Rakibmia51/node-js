
const express = require('express')
const cors = require('cors')
const ejs = require('ejs');
const User = require('./models/user.model');
const app = express()
require("./config/database");
require("./config//passport");
require("dotenv").config();

const bcrypt = require('bcrypt');
const saltRounds = 10;

const passport = require("passport");
const session = require("express-session");
const MongoStore = require('connect-mongo');


app.set("view engine", "ejs");
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.set('trust proxy', 1) // trust first proxy
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        store: MongoStore.create({
          mongoUrl: process.env.MONGO_URL,
          collectionName: "sessions"
        })
      // cookie: { secure: true }
      })
)

app.use(passport.initialize())
app.use(passport.session())

// base url - home route
app.get('/', (req, res) => {
  res.render("index")
})


const checkLogged = (req, res, next)=>{
  if(req.isAuthenticated()){
    return res.redirect("/profile")
  }
  next();
}
// login : get
app.get('/login', checkLogged, (req, res) => {
  res.render("login")
})


app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { 
    failureRedirect: '/login', 
    successRedirect: '/profile'
  }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });



  const checkAuthenticated = (req, res, next)=>{
  if(req.isAuthenticated()){
    return next()
  }
  res.redirect("/login")
}
// profile protected route
app.get('/profile', checkAuthenticated, (req, res) => {
  res.render("profile", {username: req.user.username})
})

// Logout route
app.get('/logout', (req, res) => {
  try {
    req.logOut((err)=>{
      if(err){
        return next(err);
      }
      res.redirect("/")
    })
  } catch (error) {
    res.status(500).send(error.message)
  }
})


module.exports = app;