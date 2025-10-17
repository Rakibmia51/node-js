const express = require('express');
const { runValidation } = require('../validation');
const { registerUser, loginUser } = require('../controllers/user');
const { userRegistrationValidation, userLoginValidation } = require('../validation/auth');

const userRoutes = express.Router();


// router - registration (name, email, password, dob) 
userRoutes.post("/register", 
    userRegistrationValidation,
    runValidation,
    registerUser
    )


// router login
userRoutes.post("/login", 
    userLoginValidation,
    runValidation,
    loginUser
    )

module.exports = userRoutes;