const express = require('express');
const { userRegister, userLogin } = require('../controllers/users.controller');
const { runValidation } = require('../validation/user.vaidation');
const { schemas } = require('../validation/user.schema');


const userRouter = express.Router();


// api/register - (name, email, password)
userRouter.post("/register", 
    runValidation(schemas.registerSchema),
    userRegister)


// api/login - ( email, password)
userRouter.post("/login", 
    runValidation(schemas.loginSchema),
    userLogin)


module.exports = userRouter;