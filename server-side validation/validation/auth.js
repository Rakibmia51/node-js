const { check } = require("express-validator");

// User Registration validation
exports.userRegistrationValidation = [
      check("name")
        .trim()
        .notEmpty()
        .withMessage("Name is messing")
        .isLength({min: 5})
        .withMessage("name must have at least 5 characters")
         .isLength({max: 31})
        .withMessage("name can have maximum 31 characters"),
    
        check("email")
        .trim()
        .notEmpty()
        .withMessage("Email is messing")
        .isEmail()
        .withMessage("Not a valid Email"),
        
         check("password")
        .trim()
        .notEmpty()
        .withMessage("password is messing")
        .isLength({min: 5})
        .withMessage("password must have at least 5 characters"),
    
        check("dob")
        .trim()
        .notEmpty()
        .withMessage("dob is messing")
        .isISO8601()
        .toDate()
        .withMessage("Not a valid dob")
        ,
]
// User Login validation
exports.userLoginValidation =[
     check("email")
    .trim()
    .notEmpty()
    .withMessage("Email is messing")
    .isEmail()
    .withMessage("Not a valid Email"),
    
     check("password")
    .trim()
    .notEmpty()
    .withMessage("password is messing")
    .isLength({min: 5})
    .withMessage("password must have at least 5 characters")
]